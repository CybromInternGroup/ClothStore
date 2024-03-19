const AddressModel = require("../models/address")

const setAddress=(req,res)=>{
    const myData= new AddressModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}


const getaddress= async(req,res)=>{
    AddressModel.find().then((data)=>{
        res.json(data);
    })
}



module.exports={
    setAddress,getaddress
}