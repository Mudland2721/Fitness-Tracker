const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

//middleware --- start
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//middleware --- end

//homeroute
app.get("/", (req, res) => {
  res.sendFile(__dirname, "../Develop/public/index.html");
});
// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});