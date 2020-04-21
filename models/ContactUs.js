const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactUsSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    Phonenumber: String,

    Message: String,
  },
  
  { timestamps: true }
);


module.exports = ContactUs = mongoose.model("ContactUs", ContactUsSchema);