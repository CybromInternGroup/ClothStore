import "./header.css"
import "../../style.css"
import { links } from "../../data";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useMediaQuery } from 'usehooks-ts'
import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Popup from "./linkspopup/Popup";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../slices/userSlice";
import Footer from "../pages/footer/Footer";


const Header = () => {  

    const dispatch = useDispatch()
  
    const isLogin = useSelector((state)=>state.user.isLogin);
const navigate = useNavigate()
const match = useMediaQuery('(max-width: 768px)')
const [userEmail, setUserEmail] =  useState("")
const [profilePic,setProfilePic] = useState("")

const [color , setcolor] = useState(false)


window.addEventListener("scroll",()=>{
  
    if(window.scrollY>=170){
    setcolor(true)
    }
    else{
        setcolor(false)
    }
})

useEffect(()=>{

    setUserEmail(window.sessionStorage.getItem("email"))
    setProfilePic(window.sessionStorage.getItem("image"))

},[userEmail])
    
const logout = ()=>{
    dispatch(userLogout()) 
    googleLogout()
  
}

const cartfilled=()=>{
    navigate("/cart")
}   

let clickdisable=false;
const searchent=()=>{
 const st=document.getElementById('searchinput');
 st.style.backgroundColor="#FFC107";
 st.style.width="150px";
 st.style.opacity="1";
 st.style.transition="all 0.5s ease";
 st.style.outline="none";
        
}
const searchout=()=>{
  if(!clickdisable){
  const st=document.getElementById('searchinput');
  st.style.width="0px";
  st.style.opacity="0";
  st.style.outline="none";
}
  // st.style.transition="all 0.5s ease";             
 }

 const searchclick=()=>{
  clickdisable=true;
  const st=document.getElementById('searchinput');
  st.focus();
  st.style.outline="none";
  
  
 }

    return <>


        <motion.div className="container" style={color?{backgroundColor:"black"}:{backgroundColor:'rgba(8, 8, 8, 0.49)'}} >


            <div className="logo">
                <h1>As fashion</h1>
            </div>
            <div className={match ? "hide" : "navlinks"}>
              <ul className="linkcontainer">
                  {links.map((key, idx) => {
                        return <Link style={{textDecoration:"none"}} to={key}><li >{key}</li></Link>

                    })}
              </ul>
           </div> 


           
           <div className={match ? " hide" : " sideicons"}>
            <input className="input2" type="text" id="searchinput"/>
           <FaSearch className="icon" id="searchicon"  onClick={searchclick} onMouseOver={searchent} onMouseOut={searchout} />
                <FaShoppingCart className="icon" onClick={cartfilled} />
               {isLogin ? <CgProfile className="icon" /> : <IoMdLogIn  className="icon" onClick={()=>navigate("/login")}/> }
            </div>


           <Popup/>
           {isLogin &&<h1>{userEmail}</h1>}
           {isLogin &&  <img src={profilePic} alt="not" />}
           {console.log(profilePic)}
          
  <button onClick={()=>{logout()}}>logout</button>
        </motion.div>
       


                

       
   <Outlet/>
   <Footer/>

    </>
}


export default Header;