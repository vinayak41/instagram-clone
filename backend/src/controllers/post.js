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
  try {
    const allPosts = await Post.find({});
    res.status(200).json(allPosts);
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

module.exports = { createPost, getPosts, getImage };