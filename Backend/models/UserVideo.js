const mongoose = require("mongoose");

const userVideoSchema = new mongoose.Schema({
  userId: String,
  videoId: String,
  completed: Boolean,
});

module.exports = mongoose.model("UserVideo", userVideoSchema);