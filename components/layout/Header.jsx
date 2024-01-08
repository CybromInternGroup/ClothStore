import "./header.css"
import "../../style.css"
import { links } from "../../data";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";
import { useMediaQuery } from 'usehooks-ts'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Popup from "./linkspopup/Popup";
import { Link, Outlet } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {


const [islogin, setlogin] =  useState(false)





    const match = useMediaQuery('(max-width: 768px)')
   

    console.log(match)

    return <>
        <div className="container">



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
               {islogin ? <CgProfile className="icon" /> : <IoMdLogIn  className="icon" onClick={()=>setlogin(true)}/> }
            </div>


           <Popup/>


        </div>
   <Outlet/>

    </>
}


export default Header;