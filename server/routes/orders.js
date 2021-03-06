const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dayjs = require("dayjs");
const router = express.Router();

app.use(bodyParser());


// Model-Order
const Products = require('../models/orderSchema');   

 
//Creating Order 

router.post('/order',async(req,res)=>{
   try {
       const {totalPrice,totalItems,shirts,Tshirts,trouncers,jeans,joggers,sacuuress,others}= req.body;
       const Order = await Products.create({
           totalItems,
           totalPrice,
           dataOrdered:dayjs().format("dddd, MMM D, h:mm A"),
           user:req.user,
           shirts,
           Tshirts,
           trouncers,
           jeans,
           sacuuress,
           joggers,
           others
       })
       return res.status(200).json({
           status:"success",
           message:"Order Sucessfully",
           Order
       })
   } catch (e) {
       res.status(500).json({
           status:"Order Not Created",
           error:e.message
       })
   }
})
// geting particular order  details

router.get("/order/:id",async (req,res)=>{
    try {
        const Order = await Products.find({_id:req.params.id})
        if (!Order){
            return res.status(404).json({
                status:"Not Updated",
                message:"Order not Created/found",
            })
        }
        return res.status(200).json({
            status:"sucess",
            message:"Found the Order",
            Order
        })
    } catch (e) {
        res.status(500).json({
            status:"Order Not Created",
            error:e.message
        })
        
    }
})

// To Cancel a order(making status as cancelled)
router.put("/order/:id", async (req, res) => {
    try {
        const Order = await Products.updateOne({_id: req.params.id, user: req.user},  {status: "Cancelled"})
        return res.status(200).json({
            status: "Success",
            Order
        })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})
 
// fetching all orders

router.get("/orders",async(req,res)=>{
    try {
        const Orders = await Products.find({user:req.user})
        return res.status(200).json({
            status:"Sucess",
            date:Orders
        })
    } catch (e) {
        return res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})


module.exports=router;