import { useState } from "react";
import "./password.css"
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Forgotpassword = ()=>{

const [gotoReset,setGoto] = useState(false);
const [canReset, setCanReset] = useState(false);
const [passdata,setpassdata] =  useState({});
const navigate = useNavigate()




const forgot = async ()=>{

axios.post("http://localhost:5000/forgotpassword", {email:passdata.email}).then((res)=>{

if(res.data.gotoReset){
    setGoto(true)
}
else{
    alert(res.data.message)
}

})

}

const otpcheck = async()=>{

axios.post("http://localhost:5000/resetpassword",{otp:passdata.otp}).then((res)=>{

if(res.data.canReset){
    setCanReset(res.data.canReset)
}
else{
alert(res.data.message)

}
})

}


const resetpass = async ()=>{


if(passdata.password === passdata.cpassword){

axios.post("http://localhost:5000/changepassword",{email:passdata.email,password:passdata.password}).then((res)=>{




if(res.data.redirect){

    alert(res.data.message)
    setGoto(false);
    setCanReset(false);
    setpassdata({})
    navigate("/")
}
else{

    alert(res.data.message)
    navigate("/login")
}


})


}
else{
    alert("password did not matched")
}



}



const onChanger = (e)=>{

   setpassdata((prev)=>{

    return {
        ...prev,
        [e.target.name]:e.target.value
    }
   })
}










return <>

{!gotoReset ? <div className="forgotPass">
<div className="forgotPassChild">
    <h1>forgot your password</h1>
<input className="forgotPassInput" placeholder="enter your Email" type="text" name="email" onChange={onChanger} />
<button className="btn btn1" style={{alignSelf:"center"}} onClick={forgot} >Continue</button>
</div>
</div>:!canReset ?
<div className="forgotPass">
<div className="forgotPassChild">
<input className="forgotPassInput" placeholder="enter the otp" type="text" name="otp" onChange={onChanger} />
<button className="btn btn1" onClick={otpcheck} >Submit</button>
</div>
</div>: <div className="forgotPass">
<div className="forgotPassChild">
<input className="forgotPassInput" placeholder="Enter your new password" type="text" name="password" onChange={onChanger}  />
<input className="forgotPassInput" placeholder="Confirm Password" type="text" name="cpassword"  onChange={onChanger} />
<button className="btn" onClick={resetpass} >Change</button>
</div>
</div>

}


<Outlet/>
</>

}

export default Forgotpassword;