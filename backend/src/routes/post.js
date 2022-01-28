const express = require("express");
const router = express.Router();
const { createPost, getPosts, getImage, likePost, dislikePost } = require("../controllers/post");
const { upload, requireLogin } = require("../utils/middlewares");

router.get("/image/:imageId", getImage)
router.post("/", requireLogin, upload.array("image"), createPost);
router.get("/", requireLogin, getPosts);
router.patch("/like/:postId", requireLogin, likePost)
router.patch("/dislike/:postId", requireLogin, dislikePost)
module.exports = router;
