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
                <FaSearch className="icon" />
                <FaShoppingCart className="icon" />
               {isLogin ? <CgProfile className="icon" /> : <IoMdLogIn  className="icon" onClick={()=>navigate("/login")}/> }
            </div>


           <Popup/>
           {isLogin &&<h1>{userEmail}</h1>}
           {isLogin &&  <img src={profilePic} alt="not" />}
           {console.log(profilePic)}
          
  <button onClick={()=>{logout()}}>logout</button>
        </motion.div>
       
   <Outlet/>

    </>
}


export default Header;