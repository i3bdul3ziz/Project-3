const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
name: String,
email: String,
password: String,
city: String,
image: String,
isAdmin:false,
items:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item"
}],


},
{ timestamps: true }
);

const user = mongoose.model("user", userSchema);
module.exports = user;