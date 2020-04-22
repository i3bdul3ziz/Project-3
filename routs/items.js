const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const isLoggedIn = require("../config/config");
const Comment =require("../models/Comments")

router.get("/home", async(req, res) => {
  try {
    let items = await Item.find({});

    return res.json({ items }).status(200);
  } catch (error) {
    return res.json({ message: "no item" }).status(400);
  }
});

router.post("/home/create", isLoggedIn, (req, res) => {
  console.log("test")
  const newItem = {
    name: req.body.name,
    image: req.body.image,
    user: req.user._id,
    expiration_date: req.body.expiration_date,
    address: req.body.address,
    time_from: req.body.time_from,
    time_till: req.body.time_till,
    lat:req.body.lat,
    lng: req.body.lng
  };
  let item = new Item(newItem);
  item
    .save()
    .then(() => {
      console.log("good!");
      User.findById(req.user._id, (err, user) => {
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

router.post('/home/:id', isLoggedIn, (req, res) => {
  const newComment = {
    comment: req.body.comment,
    item: req.params.id,
    user: req.user._id,
  }
  let comment = new Comment(newComment)
  comment
      .save()
      .then(() => {
          Item.findById(req.params.id, (err, item) => {
              item.comments.push(comment)
              item.save()
          })
          User.findById(req.user._id, (err, user) => {
              user.comments.push(comment)
              user.save()
          })
          res.json({ msg: "Comment Created", comment: newComment });
      })
      .catch( err => {
          console.log(err)
      })

})

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
  })
  .catch(err => {
    res.status(400).json({messge: "can not update"})
  })
});

router.delete("/home/:id/delete", (req, res) =>  {
  Items.findByIdAndDelete(req.params.id);
})

module.exports = router;