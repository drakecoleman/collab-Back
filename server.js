const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.get("/register", (req, res) => {
  res.send(console.log("Heard"));
});
app.post("/register", (req, res) => {
  res.send(console.log(req.body));
});
app.listen(8000, () => {
  console.log("Server connected");
});
