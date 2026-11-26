const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

function makeToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

function publicUser(user) {
  return { id: user._id, name: user.name, email: user.email, role: user.role };
}

// POST /api/auth/register  — Sign up
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "name, email va password majburiy" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Parol kamida 6 ta belgidan iborat bo'lsin" });
  }

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Bu email allaqachon ro'yxatdan o'tgan" });

  // Birinchi ro'yxatdan o'tgan odam admin bo'ladi
  const isFirst = (await User.countDocuments()) === 0;

  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role: isFirst ? "admin" : "user",
  });

  res.status(201).json({ token: makeToken(user), user: publicUser(user) });
});

// POST /api/auth/login  — Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "email va password kiriting" });

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Email yoki parol noto'g'ri" });
  }

  res.json({ token: makeToken(user), user: publicUser(user) });
});

// GET /api/auth/me  — Hozirgi foydalanuvchi
router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  res.json(publicUser(user));
});

module.exports = router;
