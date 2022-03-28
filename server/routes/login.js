const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebToken");
const bodyparser = require("body-parser");


const router = express.Router();
const User = require("../models/userSchema");

const { SECRETE } = require("../keys");
router.use(bodyparser());

// Register
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, phone, state, district, address, pincode } = req.body;
    const exist = await User.findOne({ email: email });
    if (exist) {
      return res.send("email already exists");
    }
    bcrypt.hash(password, 10, async (err, hash) =>{
      if (err) {
        res.status(400).json({ status: "failed", message: "invalid details" });
      }

      const user = await User.create({
        name,
        email,
        password: hash,
        phone,
        state,
        district,
        address,
        pincode,
      });
      res.status(200).json({ status: "success", user });
    });
  } catch (e) {
    res.json({ status: "fail", message: e.message });
  }
});

// Signin
router.post("/",async (req, res) => {
    console.log(req.body);
    try {
      const { email, phone, password } = req.body;
      console.log(email,password);
      var exist = email;
      if (email) {
        const Email = await User.findOne({ email: email });
        exist = Email;
        if (!Email) {
          return res.status(401).json({
            status: "failed",
            message: "invalid email",
          });
        }
      } else if (phone) {
        const Phone = await User.findOne({ phone: phone });
        exist = Phone;
        if (!Phone) {
          return res.status(401).json({
            status: "failed",
            message: "invalid phone",
          });
        }
      }

      bcrypt.compare(password, exist.password).then((result)=> {
        if (result) {
          var token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: String(exist._id)
            },
            SECRETE
          );
          res.status(200).json({
            status: "success",
            message: "login successfully",
            token,
          });
        } else {
          res.status(401).json({
            status: "failed",
            message: "not authenticated",
          });
        }
      });
    } catch (e) {
      res.json({
        status: "fail",
        message: e.message,
      });
    }
  }
);

module.exports = router;


