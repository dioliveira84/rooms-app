const express = require('express');
const router = express.Router();
// const Book = require('../models/book');
// const Author = require('../models/author');
const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});

// Users
// const userSchema = new Schema({
//   email: String,
//   password: String,
//   fullName: String,
//   imageUrl: String,
//   facebookID: String,
//   googleID: String
//   }, {
//   timestamps: true
// });

// Rooms
  // const roomSchema = new Schema({
  //     name: { type: String },
  //     description: { type: String },
  //     imageUrl: { type: String },
  //     location: {type: {type: String}, coordinates: [Number]},
  //     owner: { type: Schema.Types.ObjectId, ref: 'User' },
  //     reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  // })

// Reviews
  // const reviewSchema = new Schema({
  //     user: { type: Schema.Types.ObjectId, ref: 'User' },
  //     comment: { type: String,  maxlength: 200 },
  //     rating: {type: Number, enum: [0,1,2,3,4,5]}
  // })

module.exports = router;