import { Outlet } from "react-router-dom";
import "./home.css"
import Slider from "../../slider/Slider";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

import imgs2 from "../home/images/s2.webp"
import imgs3 from "../home/images/s3.webp"
import imgpro1 from "./images/product1.jpg"
import imgpro2 from "./images/product2.jpg"
import imgpro3 from "./images/product3.jpg"
import imgpro4 from "./images/product4.jpg"

import imgn1 from "./images/n1.webp"
import imgb3 from "./images/b3.jpg"
import imgf1 from "./images/f1.webp"


const Home = ()=>{

useEffect(()=>{ 
     


},[])

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
    <div className="slide"><img src={imgs2} alt="Image 2"/></div>
    <div className="slide"><img src={imgs2} alt="Image 3"/></div>
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

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

  <div className="product-box">
    <div className="product-image">< img  src={imgn1} width="300px"/></div>
    <div className="product-details">
      <div className="product-title">Allen Solly Men's T-Shirt</div>
      <p>Best Tshit you ever worn</p>
      <div className="product-price"><span style={{color: "red", margin: "10%"}}>20% OFF</span>Rs 250</div>
       
      <button className="buy-button">Buy Now</button>
      <button className="buy-button">Add To Cart</button>
    </div>
  </div>

</div>


<br/><br/>

  <div className="banner-container">
    < img  src={imgb3}alt="Banner Image" className="banner-image"/>
  </div>



  
  


  
  <div className="main1" >

 

    <div className="container1"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    
    <div className="container2"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    <div className="container2"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    
    
    <div className="container1"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    
    <div className="container2"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    <div className="container2"> <div className="card1"> <div className="circle"></div> <div className="content"> <h5>AS Fashion</h5> <p>Best Product you ever worn if you are its not for you baby skip please !!</p> <button>Buy Now</button> </div> < img  style={{width: "250px", height: "250px"}} src={imgf1}/> </div>
    </div>
    
    </div>

    </>

}


export default Home;