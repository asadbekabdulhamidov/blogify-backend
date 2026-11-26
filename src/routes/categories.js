const router = require("express").Router();
const Post = require("../models/Post");

// GET /api/categories  — kategoriyalar va har biridagi postlar soni
router.get("/", async (req, res) => {
  const counts = await Post.aggregate([
    { $match: { status: "Published" } },
    { $group: { _id: "$category", count: { $sum: 1 } } },
  ]);

  const result = Post.CATEGORIES.map((name) => ({
    name,
    count: counts.find((c) => c._id === name)?.count || 0,
  }));

  res.json(result);
});

module.exports = router;
