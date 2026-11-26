// Bazaga namunaviy postlar qo'shadi: npm run seed
// DIQQAT: avval bazadagi barcha postlarni o'chiradi!
require("dotenv").config();
const connectDB = require("./src/db");
const Post = require("./src/models/Post");
const posts = require("./data/posts");

async function seed() {
  await connectDB();
  await Post.deleteMany();
  await Post.insertMany(posts);

  console.log(`✅ Tayyor! ${posts.length} ta post qo'shildi.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
