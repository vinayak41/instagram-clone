const express = require("express");
const router = express.Router();
const { createPost, getPosts, getImage } = require("../controllers/post");
const { upload, requireLogin } = require("../utils/middlewares");

router.get("/image/:imageId", requireLogin, getImage)
router.post("/", requireLogin, upload.array("image"), createPost);
router.get("/", requireLogin, getPosts);

module.exports = router;
