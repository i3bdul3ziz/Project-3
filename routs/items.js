// const User = require('../models/User')
const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
// const User = require("../models/User");

router.get("/home", async(req, res) => {
  try {
    let items = await Item.find({});

    return res.json({ items }).status(200);
  } catch (error) {
    return res.json({ message: "no item" }).status(400);
  }
});

router.post("/home/create", (req, res) => {
  const newItem = {
    name: req.body.name,
    image: req.body.image,
    expiration_date: req.body.expiration_date,
    address: req.body.address,
    time_from: req.body.time_from,
    time_till: req.body.time_till,
    lat: req.body.lat,
    lng: req.body.lng
  };
  let item = new Item(newItem);
  item
    .save()
    .then(() => {
      console.log("good!");
      User.findById(req.body.id, (err, user) => {
        user.items.push(item);
        user.save();
      });
      res.json({ msg: "Item created", ItemInf: newItem });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/home/:id", async (req, res) => {
      
  try {
    let item = await Item.findById(req.params.id);

    return res.json({ item }).status(200);
  } catch (error) {
    return res.json({ message: "No item" }).status(400);
  }
});

router.put("/home/:id/edit", (req, res) => {
  let itemNew = {
    name : req.body.name,
    image : req.body.image,
    expiration_date: req.body.expiration_date,
    location: req.body.location,
    address: {
      city: req.body.city,
      street: req.body.street
  },
  time_to_pick : req.body.time_to_pick
  }
  Item.findByIdAndUpdate(req.params.id,{$set:itemNew} ,{
    new : true
  })  
  .then(item => {
    res.json({edit :item });
  });
});

router.delete("/home/:id/delete", (req, res) =>  {
  Items.findByIdAndDelete(req.params.id);
})

module.exports = router;