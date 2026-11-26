// Bazaga namunaviy ma'lumot qo'shadi: npm run seed
// DIQQAT: avval bazadagi barcha postlar va foydalanuvchilarni o'chiradi!
require("dotenv").config();
const bcrypt = require("bcryptjs");
const connectDB = require("./src/db");
const User = require("./src/models/User");
const Post = require("./src/models/Post");
const posts = require("./data/posts");

async function seed() {
  await connectDB();
  await Post.deleteMany();
  await User.deleteMany();

  const admin = await User.create({
    name: "John Doe",
    email: "admin@blogify.uz",
    password: await bcrypt.hash("admin123", 10),
    role: "admin",
  });

  await Post.insertMany(posts.map((p) => ({ ...p, author: admin._id })));

  console.log(`✅ Tayyor! ${posts.length} ta post qo'shildi.`);
  console.log("Admin: admin@blogify.uz / admin123");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
