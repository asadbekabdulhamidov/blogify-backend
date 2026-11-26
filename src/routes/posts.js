const router = require("express").Router();
const store = require("../store");
const { protect, adminOnly, optionalAuth } = require("../middleware/auth");

// Ro'yxatda to'liq matn (content) shart emas
const withoutContent = ({ content, ...rest }) => rest;

// Kiritilgan ma'lumotni tekshiradi. isNew = yangi post yaratilyaptimi
function validate(body, isNew) {
  const { title, content, category, status } = body;
  if (isNew && (!title || !content || !category)) return "title, content va category majburiy";
  if (category !== undefined && !store.CATEGORIES.includes(category))
    return `category faqat: ${store.CATEGORIES.join(", ")}`;
  if (status !== undefined && !store.STATUSES.includes(status))
    return `status faqat: ${store.STATUSES.join(", ")}`;
  return null;
}

// Faqat ruxsat etilgan maydonlarni olamiz
function pick(body) {
  const fields = ["title", "excerpt", "content", "category", "image", "status"];
  const data = {};
  for (const f of fields) if (body[f] !== undefined) data[f] = body[f];
  return data;
}

// GET /api/posts?search=web&category=Design&page=1&limit=9
router.get("/", optionalAuth, (req, res) => {
  const { search, category, status } = req.query;
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Number(req.query.limit) || 9, 50);

  let list = store.getAll();

  // Oddiy foydalanuvchi faqat Published postlarni ko'radi, admin hammasini
  if (req.user?.role === "admin") {
    if (status) list = list.filter((p) => p.status === status);
  } else {
    list = list.filter((p) => p.status === "Published");
  }

  if (category && category !== "all") list = list.filter((p) => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter((p) => p.title.toLowerCase().includes(q)); // "Search posts..."
  }

  // Eng yangisi birinchi
  list = [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const total = list.length;
  const posts = list.slice((page - 1) * limit, page * limit).map(withoutContent);

  res.json({ posts, total, page, pages: Math.ceil(total / limit) });
});

// GET /api/posts/:id  — bitta post + o'xshash postlar (Related Posts)
router.get("/:id", (req, res) => {
  const post = store.incrementViews(req.params.id); // har ochilganda views +1
  if (!post) return res.status(404).json({ message: "Post topilmadi" });

  const related = store
    .getAll()
    .filter((p) => p.id !== post.id && p.category === post.category && p.status === "Published")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3)
    .map(withoutContent);

  res.json({ post, related });
});

// POST /api/posts  — yangi post (admin)
router.post("/", protect, adminOnly, (req, res) => {
  const error = validate(req.body, true);
  if (error) return res.status(400).json({ message: error });

  const data = pick(req.body);
  const now = new Date().toISOString();

  const post = store.add({
    id: Date.now().toString(),
    title: data.title,
    excerpt: data.excerpt || data.content.slice(0, 120),
    content: data.content,
    category: data.category,
    image: data.image || "",
    status: data.status || "Published",
    views: 0,
    author: "Admin",
    createdAt: now,
    updatedAt: now,
  });

  res.status(201).json(post);
});

// PUT /api/posts/:id  — tahrirlash (admin)
router.put("/:id", protect, adminOnly, (req, res) => {
  const error = validate(req.body, false);
  if (error) return res.status(400).json({ message: error });

  const post = store.update(req.params.id, pick(req.body));
  if (!post) return res.status(404).json({ message: "Post topilmadi" });
  res.json(post);
});

// DELETE /api/posts/:id  — o'chirish (admin)
router.delete("/:id", protect, adminOnly, (req, res) => {
  if (!store.remove(req.params.id)) return res.status(404).json({ message: "Post topilmadi" });
  res.json({ message: "Post o'chirildi" });
});

module.exports = router;
