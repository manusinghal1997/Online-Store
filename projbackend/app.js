const express = require("express");
require('dotenv').config();

app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const authRoutes = require("./routes/auth"); 

app.use("/api", authRoutes);

app.get("/admin", (req,res) =>{
    res.send("hi admin");
});


// DB connection
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

// starting the server
app.listen(port,() =>{
    console.log("server running at port 3000");
});