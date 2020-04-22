const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: String,
    image: String,
    expiration_date: Date,

    address: String,
    time_from: String,
    time_till: String,
    isAvailble : false,
    lat: String,
    lng: String,

    comment: [
      {
        type:String
      }
    ]

  },
  

  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;