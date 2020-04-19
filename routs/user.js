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
      console.log("newUers insed findone");
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          console.log("got to hash");
          newUser.password = hash;
          User.create(newUser).then(() => {
            console.log("newUers insede creatUser");
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
          let payload = { user };
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

router.put("/profilel", (req, res) => {
  res.json({ msg: "Posts works" });
});

module.exports = router;