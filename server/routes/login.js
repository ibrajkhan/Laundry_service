const express=require('express');
const router=express.Router();
const User=require('../model/user.js');
const bcrypt=require('bcrypt');
const { body, param,validationResult } = require('express-validator');
const mongoose = require('mongoose');
var jwt = require('jsonwebToken');
const { response } = require('express');

const { SECRETE } = require("./keys");

// Register
router.post('/register',body("email"),body("name"),async (req,res)=>{
    console.log(req.body)
    try{
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {name,email,password,phone,state,district,address,pincode} = req.body
        const exist = User.findOne({email:email})
        if(exist){
            return res.send('email already exists') 
        }        
        bcrypt.hash(password, 10,async function(err, hash) {
            
            if(err){
                res.status(400).json({status:"failed",message:"invalid details"})
            }

            const user= await User.create({name,email,password:hash,phone,state,district,address,pincode});
            res.status(200).json({status:"success",user})
        });
        }
        catch(e){res.json({ status:"fail",message:e.message})}
});

router.post('/signin',body("email"),body("password"),async (req,res)=>{
    console.log(req.body)
    try{
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {email,phone,password}=req.body
        if(email){
            const Email=await User.findOne({email:email})
            if(!Email){
                return res.status(401).json({
                    status:"failed",
                    message:"invalid email"
                })
            }
        }
        else if(phone){
            const Phone=await User.findOne({phone:phone})
            if(!Phone){
                return res.status(401).json({
                    status:"failed",
                    message:"invalid phone"
                })
            }
        }

      bcrypt.compare(password, User.password).then(function(result) {
           
           if(result){
            
            var token=jwt.sign({
                exp: Math.floor(Date.now()/1000) + (60*60),
                data: User._id
                },
                SECRETE);
                res.status(200).json({
                   status:"success",
                   message:"login successfully",
                   token
                })
            }else{
                res.status(401).json({
                    status:"failed",
                    message:"not authenticated"
                })

           }
});
        }catch(e){
           res.json({
                status:"fail",
            message:e.message
        })

        }
});

module.exports=router; 