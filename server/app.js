const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orders");
const loginRoutes = require("./routes/login");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const { MONGOURL, SECRETE } = require("./keys");

//connecting database
mongoose.connect(MONGOURL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});
app.get("/order", (req, res, next) => {
  var token = req.headers.authorization.split("test ")[1];
  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "Token is missing",
    });
  }
  // verify the toke
  jwt.verify(token, SECRETE, async function (err, decoded) {
    if (err) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid token",
      });
    }
    // req.user = decoded.data;
    next();
  });
});

app.use("/", loginRoutes);
app.use("/", orderRoutes);

app.listen(5000, () => console.log("server is started"));
