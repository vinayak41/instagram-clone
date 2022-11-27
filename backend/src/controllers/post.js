const { gfs } = require("../..");
const Post = require("../models/post");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      postBy: req.userId,
      images: req.files.map((file) => file.id),
      caption: req.body.caption,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async (req, res) => {
  const postsPerPage = 5;
  let { page } = req.query;
  page = page > 0 ? page : 1;
  try {
    const totalPosts = await Post.countDocuments({});
    const totalPages = totalPosts / postsPerPage;
    const allPosts = await Post.find(
      {},
      {},
      { skip: (page - 1) * postsPerPage, limit: postsPerPage }
    )
      .populate("postBy", {
        username: 1,
        id: 1,
      })
      .populate("comments.commentBy", { username: 1 });
    res
      .status(200)
      .json({
        posts: allPosts,
        total_pages: totalPages,
        page_size: postsPerPage,
        page: page,
      });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(new ObjectId(req.params.postId))
      .populate("postBy", {
        username: 1,
        id: 1,
      })
      .populate("comments.commentBy", { username: 1 });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getImage = async (req, res) => {
  const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "Image",
  });

  try {
    gfs.find(new ObjectId(req.params.imageId)).toArray((err, files) => {
      gfs.openDownloadStream(new ObjectId(req.params.imageId)).pipe(res);
    });
  } catch (error) {
    res.status(401).json({ message: "Image not found" });
  }
};

const likePost = async (req, res, next) => {
  try {
    const likedPost = await Post.findByIdAndUpdate(
      new ObjectId(req.params.postId),
      { $addToSet: { likes: req.userId } },
      { new: true }
    );
    if (!likedPost) return res.status(401).json({ message: "Post not founds" });
    res.status(200).json({ message: "liked" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const dislikePost = async (req, res, next) => {
  try {
    const likedPost = await Post.findByIdAndUpdate(
      new ObjectId(req.params.postId),
      { $pull: { likes: req.userId } },
      { new: true }
    );
    if (!likedPost) return res.status(401).json({ message: "Post not found" });
    res.status(200).json({ message: "disliked" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const comment = async (req, res, next) => {
  try {
    await Post.findByIdAndUpdate(new ObjectId(req.params.postId), {
      $push: { comments: { commentBy: req.userId, text: req.body.text } },
    });
    res.status(200).json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getImage,
  likePost,
  dislikePost,
  comment,
  getPost,
};
