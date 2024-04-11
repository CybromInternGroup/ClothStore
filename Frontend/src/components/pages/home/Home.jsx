import { Outlet } from "react-router-dom";
import  axios  from "axios";
import "./home.css"
import Slider from "../../slider/Slider";
import { useState ,useEffect} from "react";
import {  useDispatch } from "react-redux";
import Chatbox from "../../chatbot/chatbot";
import { scroller } from "react-scroll";
import { addtocart } from "../../../slices/cartSlice";
import chatbot from "../home/images/chatbot.png";
import imgs2 from "../home/images/s2.webp"
import imgs3 from "../home/images/s3.webp"
import imgpro1 from "./images/product1.jpg"
import imgpro2 from "./images/product2.jpg"
import imgpro3 from "./images/product3.jpg"
import imgpro4 from "./images/product4.jpg"

import imgn1 from "./images/n1.webp"
import img3 from "./images/n2.webp"
import img4 from "./images/p2.webp"
import img5 from "./images/p3.webp"
import img6 from "./images/p4.webp"
// import img6 from "./images/p4.webp"
import img7 from "./images/p5.webp"
import imgb3 from "./images/b3.jpg"
import ChatPopup from "../../chatbot/chatbot";

const Home = ()=>{

  const [showChatbox, setShowChatbox] = useState(false);
  const [proData,setProData] = useState([]); 

  const dispatch = useDispatch();

  const toggleChatPopup = () => {
    setShowChatbox(!showChatbox);
  };

  const  loadProductData= async ()=>{
  
    await axios.get("http://localhost:5000/AdminproductDisplay").then((res)=>{
      console.log(res.data);
      setProData(res.data)
    }).catch((error)=>{
      console.log("Error While Featching Data",error);
    })
  }


  useEffect(()=>{
    loadProductData()
  })


  
  const myproductAdd=(id,name , description,category,price,regularPrice,images,size )=>{
    dispatch(addtocart ({id:id ,name:name ,description:description,category:category,price:price,regularPrice:regularPrice,images:images,size:size} ))
  }
let currentIndex = 0;

  function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  let currentIndex1 = 0;

  function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlide2() {
    showSlide(currentIndex + 1);
  }

  function prevSlide1() {
    showSlide(currentIndex - 1);
  }

    return <>
    <div className="homeContainer">

    <Slider/>


    </div>

    <div className="slider-container">
  <div className="slider">
    <div className="slide"><img src={imgpro3} alt="Image 2"/></div>
    <div className="slide"><img src={imgpro2} alt="Image 3"/></div>
    <div className="slide"><img src={imgs3} alt="Image 4"/></div>
    <div className="slide"><img src={imgs3} alt="Image 5"/></div>
    <div className="slide"><img src={imgpro2} alt="Image 6"/></div>
    <div className="slide"><img src={imgpro1} alt="Image 1"/></div>
    <div className="slide"><img src={imgpro2} alt="Image 2"/></div>
    <div className="slide"><img src={imgpro3} alt="Image 3"/></div>
    <div className="slide"><img src={imgpro4} alt="Image 4"/></div>
    <div className="slide"><img src={imgpro2} alt="Image 5"/></div>
    <div className="slide"><img src={imgpro3} alt="Image 6"/></div>
    

  </div>

  <button className="slider-btn prev" onClick={prevSlide}>❮</button>
  <button className="slider-btn next" onClick={nextSlide}>❯</button>
</div>

<div style={{textAlign: "center"}}>

<h1>Whats your 2024 Color Gonna Be ?</h1>
<h2>Tap Here and Tell Us</h2>

</div>



<div className="product-container">
  {proData.slice(0, 6).map((product, index) => (
    <div className="product-box" key={index}>
      <div className="product-image"><img src={product.images[0]} width="300px" alt="product"/></div>
      <div className="product-details">
        <div className="product-title">{product.name}</div>
        <p>{product.description}</p>
        <div className="product-price" style={{fontSize:"22px"}}> Rs. {product.price}  &nbsp;&nbsp; <span style={{fontSize:"14px",textDecoration:"line-through",color:"red"}}>Rs. {product.regularPrice}</span> </div>

        <button className="buy-button">Buy Now</button>
        <button className="buy-button" onClick={()=>myproductAdd(product._id,product.name , product.description,product.category,product.price,product.regularPrice,product.images,product.size)}>Add To Cart</button>
      </div>
    </div>
  ))}
</div>


<br/><br/>

  <div className="banner-container">
    < img  src={imgb3}alt="Banner Image" className="banner-image"/>
  </div>
  
  <div className="main1">
      {proData.slice(0, 6).map((product, index) => (
        <div key={index} className={index % 2 === 0 ? "container1" : "container2"}>
          <div className="card1">
            <div className="circle"></div>
            <div className="content">
              <h2>{product.name}</h2>
              <h3>{product.description}</h3>
              <div  style={{fontSize:"22px"}}>Rs. {product.price}  <span style={{fontSize:"14px",textDecoration:"line-through",color:"red"}}>Rs. {product.regularPrice}</span></div> 
              <button  onClick={()=>myproductAdd(product._id,product.name , product.description,product.category,product.price,product.regularPrice,product.images,product.size)}>Add To Cart</button>
            </div>
            <img style={{ width: "250px", height: "250px" }} src={product.images[0]} alt={`Product ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>


    <div className="chatbot-icon" onClick={toggleChatPopup}>
        <img src={chatbot} alt="ChatbotIcon" />
      </div>

      {showChatbox && <ChatPopup onClose={toggleChatPopup} />}
    </>

}


export default Home;