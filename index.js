const express = require("express");
const doenv = require("dotenv");
const app = express();

doenv.config();

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello server !");
});

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server start on Port ${Port}`);
});
