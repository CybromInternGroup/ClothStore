import  "./signup.css"
import axios from "axios"

//import boximg from "../Components/signupback.jpg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
// const Signup = ()=>{

//     let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//       let path = Home; 
//       navigate(path);
//     }
const Signup = ()=>{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/home');
    };

const [userData, setUserData] = useState({
    name:"",
    mobile:"",
    email:"",
    password:""
})
const [checkPass, setCheckPass] = useState("")

const handlechange = (e)=>{

    setUserData((prev)=>{
        
        return {...prev,
            [e.target.name]:e.target.value
        }

    })


}
const checkPassword=(e)=>{

    setCheckPass(e.target.value)

}


const saveData =  async ()=>{

    if(checkPass !== userData.password){

        alert("password did not match")
    }
    else {

        axios.get(`http://localhost:5000/user/${userData.email}`).then(async (res)=>{

        console.log(res.data.signup)

        if(res.data.signup){
    
 let data = await axios.post("http://localhost:5000/user", userData)
         alert("user resistered successfully")

        }
        else{

alert(res.data.message)

        }

        })
        





    }
}


    return (
        <>
           <div className="signupContainer">


            <div className="imgbox">
                <img src="https://images.bewakoof.com/web/ik-signup-desktop-v1.jpg" alt="" />
            </div>

            <div className="login">

                <h1>Sign Up</h1>
                <br />
                <p>Hi new buddy, let's get you started
                    with the AS Factory fashion!</p>
                    <br /><br />
                <input type="text" placeholder="Name" name="name" onChange={handlechange}/><br />
                <input type="text" placeholder="Mobile" name="mobile" onChange={handlechange}/><br />
                <input type="text" placeholder="Email ID" name="email" onChange={handlechange} /><br />
                <input type="text" placeholder="Password" name="password" onChange={handlechange}/><br/>
                <input type="text" placeholder="Confirm Password"  onChange={checkPassword}/><br/>
                <button className="btn-flip" data-back="Welcome to Our family" data-front="SignIn" onClick={saveData} ></button>
                
            </div>

            </div>
        </>
    )
}

export default Signup