const router = require("express").Router();
const mongoose = require("mongoose");
const Post = require("../models/Post");
const { protect, adminOnly, optionalAuth } = require("../middleware/auth");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/posts?search=web&category=Design&page=1&limit=9
router.get("/", optionalAuth, async (req, res) => {
  const { search, category, status } = req.query;
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Number(req.query.limit) || 9, 50);

  const filter = {};

  // Oddiy foydalanuvchi faqat Published postlarni ko'radi, admin hammasini
  if (req.user?.role === "admin") {
    if (status) filter.status = status;
  } else {
    filter.status = "Published";
  }

  if (category && category !== "all") filter.category = category;
  if (search) filter.title = { $regex: search, $options: "i" }; // "Search posts..."

  const [posts, total] = await Promise.all([
    Post.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .select("-content"), // ro'yxatda to'liq matn shart emas
    Post.countDocuments(filter),
  ]);

  res.json({ posts, total, page, pages: Math.ceil(total / limit) });
});

// GET /api/posts/:id  — bitta post + o'xshash postlar (Related Posts)
router.get("/:id", async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ message: "Noto'g'ri id" });

  // Har ochilganda ko'rishlar soni +1
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: true }
  );

  if (!post) return res.status(404).json({ message: "Post topilmadi" });

  const related = await Post.find({
    _id: { $ne: post._id },
    category: post.category,
    status: "Published",
  })
    .sort({ createdAt: -1 })
    .limit(3)
    .select("title excerpt image category createdAt");

  res.json({ post, related });
});

// POST /api/posts  — yangi post (admin)
router.post("/", protect, adminOnly, async (req, res) => {
  const { title, excerpt, content, category, image, status } = req.body;
  if (!title || !content || !category) {
    return res.status(400).json({ message: "title, content va category majburiy" });
  }

  try {
    const post = await Post.create({
      title,
      excerpt: excerpt || content.slice(0, 120),
      content,
      category,
      image,
      status,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/posts/:id  — tahrirlash (admin)
router.put("/:id", protect, adminOnly, async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ message: "Noto'g'ri id" });

  const { title, excerpt, content, category, image, status } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, excerpt, content, category, image, status },
      { new: true, runValidators: true, omitUndefined: true }
    );
    if (!post) return res.status(404).json({ message: "Post topilmadi" });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/posts/:id  — o'chirish (admin)
router.delete("/:id", protect, adminOnly, async (req, res) => {
  if (!isValidId(req.params.id)) return res.status(400).json({ message: "Noto'g'ri id" });

  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: "Post topilmadi" });
  res.json({ message: "Post o'chirildi" });
});

module.exports = router;
