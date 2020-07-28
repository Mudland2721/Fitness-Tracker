const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const PORT = process.env.PORT || 3000


const app = express();

//middleware --- start
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//middleware --- end

const datatbaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(datatbaseUrl, collections);
db.on("error", (error) => {
  console.log(`DATABASE ERROR:`, error);
});

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname, "../Develop/public/index.html");
});
// Listen on port 3000
app.listen(PORT, (err) => {
  console.log("app is listening on:" + PORT);
  if (err) {
      console.log(500)
  } else {
      console.log(`YAY!`,200)
  }
})