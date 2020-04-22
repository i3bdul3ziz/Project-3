const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    items: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item"
    }],
    comments:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }],
    image: String,
  },
  
  { timestamps: true }
);

// const User =
module.exports = User = mongoose.model("User", userSchema);