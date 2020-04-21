const express = require("express");
const router = express.Router();
const Message = require("../models/ContactUs");

router.post("/home/contactUs", (req, res) => {
const newCantactUs={
    name: req.body.name,
    email: req.body.email,
    Phonenumber: req.body.Phonenumber,
      Message: req.body.Message,
};
let message = new Message(Message);
  message
    .save()
    .then(() => {
      console.log("thank you for contact us!")});
res.json("thank you for contact us!")
    });

module.exports = router;