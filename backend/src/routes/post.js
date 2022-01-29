const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getImage,
  likePost,
  dislikePost,
  comment,
  getPost,
} = require("../controllers/post");
const { upload, requireLogin } = require("../utils/middlewares");

router.get("/image/:imageId", getImage);
router.post("/", requireLogin, upload.array("image"), createPost);
router.get("/", requireLogin, getPosts);
router.patch("/like/:postId", requireLogin, likePost);
router.patch("/dislike/:postId", requireLogin, dislikePost);
router.patch("/comment/:postId", requireLogin, comment);
router.get("/:postId", requireLogin, getPost);
module.exports = router;
