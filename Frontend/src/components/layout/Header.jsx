import "./header.css"
import "../../style.css"
import { links } from "../../data";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useMediaQuery } from 'usehooks-ts'
import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Popup from "./linkspopup/Popup";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../slices/userSlice";
import Footer from "../pages/footer/Footer";
// import mylogo from "./logofinal.png"
import { useSearch } from "../../SearchContext";




const Header = () => {


    const mycart = useSelector((state)=>state.cartSlice.cart);
    const itemLength = mycart.length;
// const [display,setDisplay]=useState("none");
const [isdropOpen, setIsdropOpen] = useState(false);
const { searchQuery, setSearchQuery } = useSearch();
const toggleDropdowncat = () => {
  setIsdropOpen(!isdropOpen);
};


    const dispatch = useDispatch()

    const isLogin = useSelector((state) => state.user.isLogin);
    const navigate = useNavigate()
    const match = useMediaQuery('(max-width: 768px)')
    const [userEmail, setUserEmail] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const [colorset, setcolor] = useState(false)
    


    window.addEventListener("scroll", () => {

        if (window.scrollY >= 170) {
            setcolor(true)
        }
        else {
            setcolor(false)
        }
    })

    useEffect(() => {

        setUserEmail(window.sessionStorage.getItem("email"))
        setProfilePic(window.sessionStorage.getItem("image"))

    }, [userEmail])

    const logout = () => {
        dispatch(userLogout())
        googleLogout()

    }

    const cartfilled = () => {
        navigate("/cart")
    }

    let clickdisable = false;
    const searchent = () => {
        const st = document.getElementById('searchinput');
        st.style.backgroundColor = "#FFC107";
        st.style.width = "150px";
        st.style.opacity = "1";
        st.style.transition = "all 0.5s ease";
        st.style.outline = "none";

    }
    const searchout = () => {
        if (!clickdisable) {
            const st = document.getElementById('searchinput');
            st.style.width = "0px";
            st.style.opacity = "0";
            st.style.outline = "none";
        }
        // st.style.transition="all 0.5s ease";             
    }

    const searchclick = () => {
        clickdisable = true;
        const st = document.getElementById('searchinput');
        st.focus();
        st.style.outline = "none";

        const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/Products?search=${encodeURIComponent(trimmedQuery)}`);
    }


    }


    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // const handleOptionClick = (option) => {
    //   setSelectedOption(option);
    //   setIsOpen(false);
    // };

    return <>


        <motion.div className="container" style={colorset ? { backgroundColor: "black" } : { backgroundColor: 'transparent' }} >


            <motion.div className="logo">
                {/* <img style={{width:"100px",marginTop:"15px"}} src={mylogo}/> */}
                <motion.h1 style={colorset?{color:"white"}:{color:"black"}}>As fashion</motion.h1>
            </motion.div>
            <motion.div className={match ? "hide" : "navlinks"}>
                <ul className="linkcontainer">
                    {/* {links.map((key, idx) => {

                        return <Link style={{ textDecoration: "none" }} to={key}><li style={colorset?{color:"white"}:{color:"black"}} >{key}</li></Link>

                    })} */}
                    <li className="mainlinks">
                      <Link style={colorset?{color:"white"}:{color:"black"}} to="home">Home</Link>
                      <Link style={colorset?{color:"white"}:{color:"black"}} to="Products">Products</Link>
                      <li style={colorset?{color:"white"}:{color:"black"}} to="categories"  className="dropdown-toggle" onClick={toggleDropdowncat}>Categories</li>
                      <Link style={colorset?{color:"white"}:{color:"black"}} to="About Us">About Us</Link>
                      </li>
                                      
                </ul>
            </motion.div>

            

            <motion.div className={match ? " hide" : " sideicons"}>
                <input className="input2" type="text" id="searchinput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <FaSearch style={colorset?{color:"white"}:{color:"black"}} className="icon" id="searchicon" onClick={searchclick} onMouseOver={searchent} onMouseOut={searchout} />
                <FaShoppingCart style={colorset?{color:"white"}:{color:"black"}} className="icon" onClick={cartfilled} />  <span style={colorset?{color:"white"}:{color:"black"}} className="cartSize">{itemLength}</span>
                {isLogin ?  <CgProfile style={colorset?{color:"white"}:{color:"black"}} className="icon" onClick={toggleDropdown}/> : <IoMdLogIn style={colorset?{color:"white"}:{color:"black"}} className="icon" onClick={() => navigate("/login")} />}
            
                {/* <div className="dropdown-container"> */}
      {/* <div className="dropdown-header" onClick={toggleDropdown}> */}
        {/* {selectedOption ? selectedOption : ''} */}
      {/* </div> */}
      {isOpen && (
        <div className="dropdown-options">
          <div onClick={()=> navigate('/myaddress')} >My Address</div>
          <div onClick={()=> navigate('/myorder')} >My Orders</div>
          <div onClick={()=> navigate('/mypayment')} >My Payments</div>
          <div onClick={()=> navigate('/myinfo')} >My Info</div>
          <div onClick={()=> navigate('/mywishlist')} >My Wishlist</div>
          <div>Logout</div>
        </div>
      )}

            </motion.div>


            <Popup />
            {isLogin && <h1>{userEmail}</h1>}
            {/* {isLogin && <img src={profilePic} alt="not" />} */}
            {console.log(profilePic)}

            {/* <button onClick={() => { logout() }}>logout</button> */}
        </motion.div>



      
        {/* <nav className="dropdown" style={{display:display}} onMouseOver={()=>{setDisplay("block")}} onMouseLeave={()=>{setDisplay("none")}}> */}
        
         <div className="dropdown-container" onMouseOver={()=>{setIsdropOpen(true)}} onMouseLeave={()=>{setIsdropOpen(false)}}>
      {isdropOpen && (
        <div className="dropdown-content">
     <NavLink to="/Products" style={{textDecoration:"none",color:"black",fontWeight:"bolder"}}>
          <p>Jeans</p>
          <p>Pajamas</p>
          <p>Shirt</p>
          <p>T-Shirt</p>
          <p>Jackets</p>
          <p>Trouserss</p>
</NavLink>
          
        </div>
      )}
    </div> 
  
    
        <Outlet />
        <Footer />

    </>
}


export default Header;
