import "./login.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { UseDispatch, useDispatch } from "react-redux";
import { normalLogin,googleLogin,setUser } from "../../../slices/userSlice";
import { useEffect } from "react";
import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';


const Login = () => {
    const isLogin = useSelector((state)=>state.user.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [message, setmessage] = useState();
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })






//google login authentication  starts from here --------------  
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });



    useEffect(
        () => {
            
            if (user) {
                console.log(user)
            
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(res.data)
                        dispatch(googleLogin(res.data))

                        navigate("/home")
                        console.log(profile)
                        
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );



//google login authentication endss here--------------


    const handlechange = (e) => {

        setUserData((prev) => {


            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })


    }

    const checkAuth = async () => {

        axios.post("http://localhost:5000/user/auth", userData).then(data => {

            if (data.statusText == "OK") {

                if (data.data.login) {
                    //if user is login is true redirect user to the home page
                    dispatch(normalLogin(data.data))
                    console.log(data)
                
                                                             
                }
                else {
                    //if user login is not true set a message to show on the screen   
    
                    if (data.data.message.length > 0) {
    
                        console.log(data)
                        setmessage(data.data.message)                      
                    }   
                }     
            }
            else {
                alert("something went wrong")
            }
        })       
    }

    if(isLogin){
        navigate("/")
      }

  //  


    return (

        <>

            <div className="form-container">
                <img className="img" src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="Left Image" />

                <div className="form-content">
                    <h1>Log In </h1><br /><br />
                    <p style={{color:"#a0a0a0"}}>For Latest Trend Exciting offers</p><br />

                    <input className="num" name="email" type="text" onChange={handlechange} placeholder="Enter your Email here" />
                    <br /><br />
                    <input className="num" name="password" type="text" onChange={handlechange} placeholder="Enter your password here " />


                    <br /> <br />

                    <button className="btn" onClick={checkAuth}>Continue</button>

                    <br /><br />

                    <p style={{ marginLeft: "150px" }}>Don't have account ? <button className="submitbtn" onClick={() => { navigate("/signup") }} >Signup</button> </p><br />

                    <p className="or">_______________&nbsp;&nbsp;<i style={{color:"grey",position:"absolute",marginTop:"6px"}}>OR</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________</p>


                    <br /><br />
                    <button className="email" onClick={() => login()}><FcGoogle style={{position:"absolute",marginLeft:"-30px"}} />Countinue with Google </button>
                    <br /><br />
                    

                    <div className="social-buttons">
             
                        {/* <br /><br />
                        &nbsp; &nbsp;  &nbsp;  &nbsp;
                        <button className="btn"><FaFacebook /> Facebook</button> */}
                    </div>

                    
                </div>
            </div>

        </>
    )
}
export default Login;