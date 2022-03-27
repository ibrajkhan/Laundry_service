const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require('cors');
//importing Routes
const orderRoutes = require("./routes/orders");
const loginRoutes = require("./routes/login");

const app = express();
app.use(bodyParser.json());
app.use(cors()) 
// keys
const { MONGOURL, SECRETE } = require("./keys");

//connecting database
mongoose.connect(MONGOURL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});
app.use("/order", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //console.log(req.headers.authorization)
  var token = req.headers.authorization.split("test ")[1];
  console.log(token)
  //console.log(token)
  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "Token is missing",
    });
  }
  //verify the token
  jwt.verify(token, SECRETE, async  (err, decoded)=> {
    if (err) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid token",
      });
    }
    console.log(decoded)
    req.user = decoded.data;
    next();
  });
});

app.use("/", loginRoutes);
app.use("/order", orderRoutes);

app.listen(5000, () => console.log("server is started"));
