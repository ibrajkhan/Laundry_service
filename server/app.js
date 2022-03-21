const express = require("express");


//connecting database
mongoose.connect('mongodb+srv://Team07:Team07@cluster0.pzyhi.mongodb.net/Laundry?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
    console.log("Connected successfully");
});
