const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const followerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  follower: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

followerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

followerSchema.index(
  { userId: 1, follower: 1 },
  { unique: true, partialFilterExpression: { complete: true } }
);
followerSchema.plugin(uniqueValidator)

module.exports = mongoose.model("Follower", followerSchema);
