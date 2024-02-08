


const mongoose = require("mongoose")

const category_scheama = new mongoose.Schema({

name:{
    type:String
}
,
product:
   [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"product"
   }] 



})


const category = mongoose.model("category",category_scheama)

module.exports = category;