const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  
  User.findOne({ email: newUser.email })
    .then((user) => {
      console.log("newUers inside findone");
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          console.log("got to hash");
          newUser.password = hash;
          User.create(newUser).then(() => {
            console.log("newUers inside creatUser");
            res.json({ msg: "user created", userInf: newUser, register: true });
          })
          .catch(err => {
            console.log(err)
          })
        });
      } else {
        res.json({ msg: "email  used", register: false });
      }
    })
    .catch((err) => {
      console.log(err) 
      res.json(err) 
    }) ;
});

router.post("/signin", (req, res) => {
  const Signin = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ email: Signin.email })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(Signin.password, user.password)) {
          user.password = undefined;
          let payload =  { user }
          let token = jwt.sign(payload, "SECRET");

          res.json({ token, Signin: true });
        } else {
          res.json({ msg: "password is not correct" });
        }
      } else {
        res.json({ msg: "email is not found" });
      }
    })
    .catch((err) => res.json(err));
});
// console.log("is working");

router.get("/profile/:id", async(req, res ) => {
     try {
       let user = await User.findById(req.params.id)
       res.status(200).json({user})
     } catch (error) {
      res.status(400).json({message: "no user found"})
     }
     

})

router.put("/profile/:id", (req, res) => {
  let userNew = {
    name : req.body.name,
    image : req.body.image,
    password: req.body.password
  }
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    console.log("got to hash");
    userNew.password = hash;

  User.findByIdAndUpdate(req.params.id,{$set:userNew} ,{
    new : true
  })
  .then(user => {
    res.json({profile :user });
  })
  .catch(err => {
  res.status(400).json({messge: "can not update"})
})
  })
});
module.exports = router;