const mongoose = require("mongoose");

// Vercel'da har so'rovda qayta ulanmaslik uchun ulanishni saqlab qo'yamiz
let connection = null;

async function connectDB() {
  if (connection) return connection;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI .env faylda yo'q");
  connection = await mongoose.connect(process.env.MONGODB_URI);
  return connection;
}

module.exports = connectDB;
