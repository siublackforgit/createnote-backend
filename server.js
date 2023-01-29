require("dotenv").config();
const path = require("path");

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())
app.use("/",require("./routes/noteRoute"));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Databse connected")
    app.listen(process.env.PORT,function(){
        console.log("Server is running on port 8000")
    })
    
})
.catch((err)=>{
    console.log(err)
})


