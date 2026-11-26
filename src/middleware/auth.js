const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Token tekshiradi: "Authorization: Bearer <token>"
function protect(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Avval login qiling" });

  try {
    req.user = jwt.verify(token, JWT_SECRET); // { login, role }
    next();
  } catch {
    res.status(401).json({ message: "Token noto'g'ri yoki muddati o'tgan" });
  }
}

// Faqat admin kira oladi
function adminOnly(req, res, next) {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Faqat admin uchun" });
  next();
}

// Token bo'lsa o'qiydi, bo'lmasa ham davom etadi
function optionalAuth(req, res, next) {
  const header = req.headers.authorization || "";
  if (header.startsWith("Bearer ")) {
    try {
      req.user = jwt.verify(header.slice(7), JWT_SECRET);
    } catch {}
  }
  next();
}

module.exports = { protect, adminOnly, optionalAuth };
