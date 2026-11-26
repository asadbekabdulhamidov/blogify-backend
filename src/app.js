require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.get("/", (req, res) => res.json({ message: "Blogify API ishlayapti 🚀", docs: "/api/docs" }));

// Swagger hujjati bazaga ulanmasdan ham ochiladi
app.use("/api", require("./swagger"));

// Har bir so'rovdan oldin bazaga ulanamiz
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ message: "Bazaga ulanib bo'lmadi", error: err.message });
  }
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/stats", require("./routes/stats"));

// Topilmagan yo'l
app.use((req, res) => res.status(404).json({ message: "Bunday yo'l topilmadi" }));

// Umumiy xatolarni ushlash
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Serverda xatolik", error: err.message });
});

module.exports = app;
