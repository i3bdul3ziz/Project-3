const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routs/user");
const itemRoutes = require("./routs/items");
const contactUsRoutes = require("./routs/contactUs");
const PORT = process.env.PORT||4000

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

app.listen(PORT, () => console.log("server run on 4000"));
