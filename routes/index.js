const express = require('express');
const router = express.Router();
const Room = require('../models/room');
const Review = require('../models/review');
const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});

module.exports = router;