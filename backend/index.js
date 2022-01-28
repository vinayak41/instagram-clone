const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/utils/config");
const { errorHandler, unknownEndpoint } = require("./src/utils/middlewares");
const cors = require("cors");
const usersRouter = require("./src/routes/user");
const postsRouter = require("./src/routes/post");
// const Image = require("./src/models/Image");
const { upload } = require("./src/utils/middlewares");
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

let gfs;
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "Image",
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

// app.post("/api/image", upload.single("file"), (req, res, next) => {
//   console.log(req.body);
//   Image.findOne({ caption: req.body.caption })
//     .then((image) => {
//       console.log(image);
//       if (image) {
//         return res.status(200).json({
//           success: false,
//           message: "Image already exists",
//         });
//       }
//       let newImage = new Image({
//         caption: req.body.caption,
//         filename: req.file.filename,
//         fileId: req.file.id,
//       });

//       newImage
//         .save()
//         .then((image) => {
//           res.status(200).json({
//             success: true,
//             image,
//           });
//         })
//         .catch((err) => res.status(500).json(err));
//     })
//     .catch((err) => res.status(500).json(err));
// });

// app.get("/api/image", (req, res, next) => {
//   console.log(req.body.filename);
//   gfs.find({ filename: req.body.filename }).toArray((err, files) => {
//     gfs.openDownloadStreamByName(req.body.filename).pipe(res);
//   });
// });

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port number ${config.PORT}`);
});
