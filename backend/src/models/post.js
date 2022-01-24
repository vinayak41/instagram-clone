const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  images: [String],
  likes: { type: Number, default: 0 },
  comments: [String],
  caption: String
});

module.exports = mongoose.model("Post", postSchema)
