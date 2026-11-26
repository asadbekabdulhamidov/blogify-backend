// Sozlamalar. .env yoki Vercel'dagi Environment Variables bo'lmasa, standart qiymatlar ishlaydi.
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "blogify-secret-key",
  ADMIN_LOGIN: process.env.ADMIN_LOGIN || "admin",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin123",
};
