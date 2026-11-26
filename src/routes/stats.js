const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const { protect, adminOnly } = require("../middleware/auth");

// GET /api/stats  — Admin Dashboard uchun (Total Posts, Total Views, Active Users)
router.get("/", protect, adminOnly, async (req, res) => {
  const [totalPosts, published, drafts, users, viewsAgg, recentPosts] = await Promise.all([
    Post.countDocuments(),
    Post.countDocuments({ status: "Published" }),
    Post.countDocuments({ status: "Draft" }),
    User.countDocuments(),
    Post.aggregate([{ $group: { _id: null, total: { $sum: "$views" } } }]),
    Post.find().sort({ createdAt: -1 }).limit(5).select("title category status views createdAt"),
  ]);

  res.json({
    totalPosts,
    published,
    drafts,
    totalViews: viewsAgg[0]?.total || 0,
    activeUsers: users,
    recentPosts,
  });
});

module.exports = router;
