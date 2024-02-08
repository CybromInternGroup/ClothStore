const { transporter } = require("./mailController")
const user = require("../models/user")

let otp = "hjsagdaj4"

const forgotPassword = async (req,res)=>{

let email = req.body.email;
console.log(email)
let data = await user.findOne({email:email})

if(data){
otp = Math.floor(1000000*Math.random())
    const mailOptions = {
        from: "amitshar82@gmail.com",
        to:email,
        subject: `hello mr ${email}`,
        text: `Your one Time Passcode is ${otp}`,      
      };
  transporter.sendMail(mailOptions,(err,info)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }


  })
     res.json({message:"user found", gotoReset:true})
}
else{

    res.json({message:"user not found", gotoReset:false})
}
}



const resetPassword = async (req,res)=>{

    if(req.body.otp == otp){

res.json({message:"congratulation now you can reset your password", canReset:true})
otp = "vchjsgjgjskjkj"; 

    }
    else{
        res.send({message:"you enterd wrong otp", canReset:false})
    }


}

module.exports = {resetPassword,forgotPassword}