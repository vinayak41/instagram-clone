const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/utils/config");
const { errorHandler, unknownEndpoint } = require("./src/utils/middlewares");
const cors = require("cors");
// const Message = require("./src/models/message");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(unknownEndpoint);
app.use(errorHandler);



app.listen(config.PORT, () => {
  console.log(`Sever running on port number ${config.PORT}`);
});
