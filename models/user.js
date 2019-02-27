
// models/user.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// Users
const userSchema = new Schema({
  email: String,
  password: String,
  fullName: String,
  imageUrl: String,
  token: String,
  status: {type: String, enum: ['active', 'pending'], default: 'pending'},
  facebookID: String,
  googleID: String
}, {
timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
