const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const { body, param, validationResult } = require("express-validator");
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
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
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

router.post("/signin",async (req, res) => {
    console.log(req.body);
    try {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    //   }
      const { email, phone, password } = req.body;
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
              data: User._id,
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


// app.post('/signin',async (req,res)=>{
//     const {Email,Password}=req.body;
//     try{
//         const {Email,Password,Phone}=req.body;
//         //const exist=await Registeruser.findOne({Email});
//         const exist=await Registeruser.findOne({$or:[{Email},{Phone}]});
//         //const exists=await Registeruser.findOne({Phone})
//         if(!exist){
//          res.status(400).send("User not found")
//         }
//         //else if(!exists){
//           //  res.status(400).send("User not found")
//            //}
//         bcrypt.compare(Password, exist.Password).then(function(result) {
//             if (result){
//                 let payload={
//                     user:{
//                         id:exist._id
//                     }
//                 }
//                 jwt.sign(payload,"jwtscreate",{expiresIn:3600000},(err,token)=>{
//                     if(err)throw err
//                     return res.json({
//                         status:"sucess",
//                         message:"login sucessfuly",
//                         token
//                     })
//                 })
//             }else{
//              res.status(400).json({
//                     status:"failed",
//                     message:"Not authenticated"
//                 })
//             }
//         });
//     }catch(err){
//         return res.status(400).send("password hashin wrong")}
// })
