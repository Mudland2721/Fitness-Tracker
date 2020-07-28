const express = require("express");
const app = express();

//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname, "../Develop/public/index.html");
  });

  //api routes need to be looked into next: WHEN I CLICK NEW WORKOUT WHAT NEEDS TO HAPPEN?
  //:NEXT =================== 