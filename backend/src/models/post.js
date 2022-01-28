const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  images: [String],
  likes: Array,
  comments: [String],
  caption: String
});

module.exports = mongoose.model("Post", postSchema)
