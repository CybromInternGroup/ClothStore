const user = require("../models/user");
const bcrypt = require("bcrypt")
const { sendmail } = require("./mailController");

const getUsers = async (req,res)=>{

let data = await user.find();
res.json(data)

}

const getUser = async (req,res)=>{
console.log(req.params.email)
let data = await user.findOne({email:req.params.email})
if(data){
    res.json({
        signup:false,
        message:"user allready exixt"
    })
}
else{
    res.json({
        signup:true
    })
}
}


const setUser = async (req,res)=>{

let data = await new user(req.body)
data.save().then(data=>{

    console.log(data)
    sendmail(req,res)
    res.json(data);
})
}

const updatePassword = async (req,res)=>{
let hashpass = await bcrypt.hash(req.body.password, 10);
let data = await user.findOneAndUpdate({email:req.body.email},{$set:{password:hashpass}},{new: true})
if(data){

console.log(data)
    res.json({message:"password updated successfully", redirect:true})
}
else{
    res.json({message:"intrenal server error please try again later",redirect:false})
}

}


const authenticate = async (req,res)=>{

let userData = await user.findOne({email:req.body.email})

const checker = (err, isMatch)=>{

    if(isMatch){
        
        res.json({login:true, message:"login successfull",userData})

    }else{

        res.send({login:false, message:"password was incorrect"})
    }
}


if(userData){
 userData.comparePassword(req.body.password, checker)
}
else{
    res.send({login:false,message:"User Not Found"})
}



}



module.exports = {getUser, getUsers, setUser, authenticate, updatePassword}