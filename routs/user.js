const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  console.log(newUser);
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
          });
        });
      } else {
        res.json({ msg: "email  used", register: false });
      }
    })
    .catch((err) => res.json(err));
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
          let token = jwt.sign(payload, "SECRET", { expiresIn: 1500 });

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


// router.post("/update", async (req, res) => {
//   // console.log(req.user);
//   let {_id, first_name} = req.body;
//   try {
//     let user = await User.findByIdAndUpdate(_id, {"first_name": first_name});
//     if (!user) throw error; 
//     let userSaved = await user.save();
//     res.json({ user: userSaved }).status(200);
//   } catch (error) {
//     res.status(400).json({ message: "something went wrong!" });
//   }
//   //
// });
module.exports = router;