const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: String,
    image: String,
    expiration_date: String,
    address: String,
    time_from: String,
    time_till: String,
    isAvailble : Boolean,
    lat: String,
    lng: String,
    comments: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }],
    user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  

  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;