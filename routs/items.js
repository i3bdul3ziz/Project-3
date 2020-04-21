// const User = require('../models/User')
const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
// const User = require("../models/User");

router.get("/home", (req, res) => {});

router.post("/home/create", (req, res) => {
  const newItem = {
    name: req.body.name,
    image: req.body.image,
    expiration_date: req.body.expiration_date,
    address: {
      city: req.body.city,
      street: req.body.street,
    },
    time_to_pick: req.body.time_to_pick,
  };
  let item = new Item(newItem);
  item
    .save()
    .then(() => {
      console.log("good!");
      User.findById("5e9c5409a8cc573dee285f98", (err, user) => {
        // console.log(req.user);
        user.items.push(item);
        user.save();
      });
      res.json({ msg: "Item created", ItemInf: newItem });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/home/:id", (req, res) => {
      
});

router.put("/home/:id/edit", (req, res) => {
       
});

module.exports = router;