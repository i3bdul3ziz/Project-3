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
    isAvailble : false,
    lat: String,
    lng: String,
<<<<<<< HEAD

    comment: [
      {
        type:String
      }
    ]

=======
    comments: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }],
    user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
>>>>>>> 9b8fe09aa4c3647d5d3e8765215537d4c3097af7
  },
  

  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;