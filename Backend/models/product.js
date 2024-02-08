const mongoose = require("mongoose")


const product_scheama = new mongoose.Schema({

name:{
    type:String
},

price:{
type:Number
},

s_quantity:{
    type:Number
},

m_quantity:{
    type:Number
},

x_quantity:{
    type:Number
},

discription:{
type:String
},

category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"category"
}


})

const product = mongoose.model("product",product_scheama)


module.exports = product;