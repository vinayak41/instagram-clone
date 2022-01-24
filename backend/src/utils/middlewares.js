const { GridFsStorage } = require("multer-gridfs-storage");
const config = require("./config");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");


//handle unknown endpoint
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};


// error handler
const errorHandler = (error, request, response, next) => {
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(409).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({
      error: "invalid token",
    });
  }
  next(error);
};


// upload 
const storage = new GridFsStorage({
  url: config.MONGODB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "Image",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// require login
requireLogin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(400).json({ error: "Signin required" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).json({ error: "Invalid token" });
    if (decoded) {
      req.userId = decoded.userId;
      next();
    }
  });
};


module.exports = { errorHandler, unknownEndpoint, upload, requireLogin };
