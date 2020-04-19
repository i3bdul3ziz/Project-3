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
    items: [],
    image: String,
  },
  { timestamps: true }
);

// const User =
module.exports = User = mongoose.model("User", userSchema);