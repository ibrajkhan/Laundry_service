const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dayjs = require("dayjs");
const router = express.Router();

app.use(bodyParser());

// Model-Order
const Products = require("../models/orderSchema");

//Creating Order

router.post("/", async function(req, res) {
  try {
      const { totalitems, totalprice, productlist, status } = req.body;
      const Orders = await Products.create({
          totalitems,
          totalprice,
          dateOrdered: dayjs().format("dddd, MMM D, h:mm A"),
          productlist,
          userId: req.user,
      });
      console.log(Orders)
      return res.json({
          status: "success",
          message: "Order Succesfull",
          Orders,
      });
  } catch (e) {
      res.status(500).json({
          status: "order Not created",
          error: e.message,
      });
  }
});
// geting particular order  details (summary)
router.get("/:id", async (req, res) => {
  try {
    const Order = await Products.find({ _id: req.params.id });
    console.log(Order)
    if (!Order) {
      return res.status(404).json({
        status: "Not Updated",
        message: "Order not Created/found",
      });
    }
    return res.status(200).json({
      status: "sucess",
      message: "Found the Order",
      data:Order,
    });
  } catch (e) {
    res.status(500).json({
      status: "Order Not Created",
      error: e.message,
    });
  }
});

// To Cancel a order(making status as cancelled)
router.put("/:id", async (req, res) => {
  try {
    const Order = await Products.updateOne(
      { _id: req.params.id, user: req.user },
      { status: "Cancelled" }
    );
    return res.status(200).json({
      status: "Success",
      Order,
    });
  } catch (e) {
    return res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

// fetching all orders

router.get("/", async (req, res) => {
  try {
    const orders = await Products.find({userId:req.user});
    console.log(orders)
    return res.status(200).json({
      status: "Sucess",
      orders,
    });
    
  } catch (e) {
    return res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;
