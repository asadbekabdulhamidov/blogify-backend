const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET, ADMIN_LOGIN, ADMIN_PASSWORD } = require("../config");

// POST /api/auth/login  — { login, password } => { token }
router.post("/login", (req, res) => {
  const { login, password } = req.body || {};

  if (login !== ADMIN_LOGIN || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Login yoki parol noto'g'ri" });
  }

  const token = jwt.sign({ login, role: "admin" }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
});

module.exports = router;
