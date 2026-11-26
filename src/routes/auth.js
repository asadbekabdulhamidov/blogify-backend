const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Bitta admin: login va parol .env faylda (bo'lmasa admin / admin123)
const ADMIN_LOGIN = process.env.ADMIN_LOGIN || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// POST /api/auth/login  — { login, password } => { token }
router.post("/login", (req, res) => {
  const { login, password } = req.body || {};

  if (login !== ADMIN_LOGIN || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Login yoki parol noto'g'ri" });
  }

  const token = jwt.sign({ login, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
});

module.exports = router;
