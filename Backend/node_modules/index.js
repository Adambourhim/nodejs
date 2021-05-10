const express = require("express");
const doenv = require("dotenv");
const app = express();

doenv.config();

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hello server !");
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.send(id);
});
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server start on Port ${Port}`);
});
