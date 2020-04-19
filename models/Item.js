const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: String,
    image: String,
    expiration_date: Date,
    location: String,
    address: {
        city: String,
        street: String
    },

    time_to_pick: String,
    isAvailble : true
  },

  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;