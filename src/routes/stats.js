const router = require("express").Router();
const store = require("../store");
const { protect, adminOnly } = require("../middleware/auth");

// GET /api/stats  — Admin Dashboard uchun
router.get("/", protect, adminOnly, (req, res) => {
  const posts = store.getAll();

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)
    .map(({ id, title, category, status, views, createdAt }) => ({ id, title, category, status, views, createdAt }));

  res.json({
    totalPosts: posts.length,
    published: posts.filter((p) => p.status === "Published").length,
    drafts: posts.filter((p) => p.status === "Draft").length,
    totalViews: posts.reduce((sum, p) => sum + p.views, 0),
    recentPosts,
  });
});

module.exports = router;
