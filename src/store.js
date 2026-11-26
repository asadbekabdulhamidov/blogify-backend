// Postlar data/posts.json faylida saqlanadi.
// Server ishga tushganda fayl o'qiladi va ma'lumot xotirada (massivda) turadi.
const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "data", "posts.json");
const CATEGORIES = ["Technology", "Productivity", "Design"];
const STATUSES = ["Published", "Draft"];

// require — Vercel faylni deploy'ga qo'shishi uchun
let posts = JSON.parse(JSON.stringify(require("../data/posts.json")));

// O'zgarishni faylga yozishga harakat qiladi.
// Kompyuterda ishlaydi. Vercel'da fayl yozib bo'lmaydi — o'zgarish faqat xotirada qoladi.
function save() {
  try {
    fs.writeFileSync(FILE, JSON.stringify(posts, null, 2) + "\n");
  } catch {
    // Vercel: fayl tizimi faqat o'qish uchun
  }
}

module.exports = {
  CATEGORIES,
  STATUSES,
  getAll: () => posts,
  findById: (id) => posts.find((p) => p.id === id),
  add(post) {
    posts.push(post);
    save();
    return post;
  },
  update(id, data) {
    const post = posts.find((p) => p.id === id);
    if (!post) return null;
    Object.assign(post, data, { updatedAt: new Date().toISOString() });
    save();
    return post;
  },
  remove(id) {
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return false;
    posts.splice(index, 1);
    save();
    return true;
  },
  incrementViews(id) {
    const post = posts.find((p) => p.id === id);
    if (post) {
      post.views += 1;
      save();
    }
    return post;
  },
};
