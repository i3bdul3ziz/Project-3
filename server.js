const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routs/user");
const itemRoutes = require("./routs/items");
const path = require("path");
const PORT = process.env.PORT || 4000;

mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost/project3",

    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  )
  .then((res) => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", itemRoutes);
app.use("/api", authRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("project-three/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./project-three/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/project-three/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./project-three/public/index.html"));
  });
}

app.listen(PORT, () => console.log("server run on 4000"));
