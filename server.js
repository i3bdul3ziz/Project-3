const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routs/user");
const itemRoutes = require("./routs/items");
const contactUsRoutes = require("./routs/contactUs");

mongoose
  .connect(
    "mongodb://localhost/project",

    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then((res) => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(itemRoutes);
app.use(authRoutes);
app.use(contactUsRoutes);

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(4000, () => console.log("server run on 4000"));
