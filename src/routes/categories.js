const router = require("express").Router();
const store = require("../store");

// GET /api/categories  — kategoriyalar va har biridagi postlar soni
router.get("/", (req, res) => {
  const published = store.getAll().filter((p) => p.status === "Published");

  const result = store.CATEGORIES.map((name) => ({
    name,
    count: published.filter((p) => p.category === name).length,
  }));

  res.json(result);
});

module.exports = router;
