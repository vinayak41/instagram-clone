const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
});

const postSchema = new mongoose.Schema({
  postBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  images: [String],
  likes: Array,
  comments: [commentSchema],
  caption: String,
});

postSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Post", postSchema);
