const express = require("express");
require('dotenv').config();

app = express();
 const mongoose = require("mongoose");
 mongoose
    .connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
     .then(() =>{
        console.log("DB connected");
     });


const port=process.env.PORT||3000;

app.listen(port,() =>{
    console.log("server running at port 3000");
});