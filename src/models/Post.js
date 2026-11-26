const mongoose = require("mongoose");

const CATEGORIES = ["Technology", "Productivity", "Design"];

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, default: "" }, // kartochkadagi qisqa matn
    content: { type: String, required: true },
    category: { type: String, enum: CATEGORIES, required: true },
    image: { type: String, default: "" }, // rasm havolasi (URL)
    status: { type: String, enum: ["Published", "Draft"], default: "Published" },
    views: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true } // createdAt = post sanasi
);

module.exports = mongoose.model("Post", postSchema);
module.exports.CATEGORIES = CATEGORIES;
