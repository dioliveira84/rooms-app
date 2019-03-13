const express = require('express');
const router = express.Router();
const Room = require('../models/room');
const Review = require('../models/review');
const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/room/add', (req, res, next) =>{
  let room = new Room();
  room._id = null;
  res.render('rooms/form', {room});
})

router.post('/room/add', (req, res, next) => {
  
  const {
    name,
    description,
    latitude,
    longitude,
    owner
  } = req.body;

  const location = { 
    type: 'Point',
    coordinates: [longitude, latitude] 
  };

  const newRoom = new Room({
    name,
    description,
    location,
    // imageUrl,
    // owner
  });

  newRoom.save()
  .then(user => {
    res.redirect("/rooms");
  })
  .catch(err => { throw new Error(err)});

})

router.get("/rooms", (req, res, next) => {
  Room.find()
    .then(rooms => {
      res.render("rooms/index", { rooms });
    })
    .catch(error => {
      throw new Error(error);
    });
  });

  router.get("/room/edit/:id", (req, res, next) => {
    const roomId = req.params.id
  
    Room.findOne({ _id: roomId })
      .then(room => {
        res.render("rooms/form", { room });
      })
      .catch(error => {
        throw new Error(error);
      });
});


router.post("/room/edit", (req, res, next) => {
  const {
    name,
    description,
    latitude,
    longitude,
    roomId
  } = req.body;

  let imageUrl = null;

  // if (req.file) {
  //   imageUrl = req.file.url;
  // }
  
  const location = { 
    type: 'Point',
    coordinates: [longitude, latitude] 
  };

  Room.update(
    { _id: roomId },
    { $set: { name, description, location, imageUrl } },
    { new: true } 
  )
    .then(user => {
      res.redirect(`/rooms`);
    })
    .catch(error => {
      throw new Error(error);
    });
});

router.get("/room/delete/:id", (req, res, next) => {
  let roomId = req.params.id;
  Room.deleteOne({ _id: roomId })
    .then(room => {
      res.redirect("/rooms");
    })
    .catch(error => {
      throw new Error(error);
    });
});


router.get("/room/:id", (req, res, next) => {
  const roomId = req.params.id

  Room.findOne({ _id: roomId })
    .then(room => {
      res.render("rooms/detail", { room });
    })
    .catch(error => {
      throw new Error(error);
    });
});

module.exports = router;