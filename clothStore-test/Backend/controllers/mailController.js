const nodemailer = require("nodemailer")
const fs = require('fs')

let str = "12345678ABCDEFGHIJ"

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "amitshar82@gmail.com",
      pass: "pbtn xkjg iqfw prij",
    },
  });


   let x = Math.floor(18*Math.random())
   







 const sendmail = async (req,res)=>{ 

    const mailOptions = {
        from: "amitshar82@gmail.com",
        to: req.body.email,
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
        html: {path : __dirname+"/flashsale.html"}
      };
  

transporter.sendMail(mailOptions,(err,info)=>{

if(err){
    console.log(err)
}
else{
    console.log("messege has been sent", info)
    
}

})


}


module.exports = {sendmail,transporter}