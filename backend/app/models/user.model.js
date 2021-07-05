const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
      username: String,
      email: String,
      password: String,
      role: String,
      phone: String,
      address: String
  })
);

module.exports = User;
