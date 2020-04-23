const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routs/user");
const itemRoutes = require("./routs/items");
const contactUsRoutes = require("./routs/contactUs");
const path =require("path");
const PORT = process.env.PORT||4000

mongoose
  .connect(
    process.env.DB,

    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then((res) => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',itemRoutes);
app.use('/api',authRoutes);
app.use('/api',contactUsRoutes);




app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// app.listen(PORT);
app.listen(PORT, () => console.log("server run on 4000"));
