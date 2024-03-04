const port = process.env.port || 7000
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const router = require('./router');
const cors = require("cors");
const ErrorHandler = require("./ErrorHandler")

require("dotenv").config()

mongoose.connect("mongodb://127.0.0.1:27017/ecom" ).then(data=>{

console.log("Data connected")

}).catch((err)=>{
    console.log(err)
})

app.use(cors({
    "Allow-Access-Control-Origin":"*"
}))

app.use(express.json())
app.use("/",router)
app.use(ErrorHandler)

app.listen(port,()=>{
    console.log("server is working on port ",port)
})



