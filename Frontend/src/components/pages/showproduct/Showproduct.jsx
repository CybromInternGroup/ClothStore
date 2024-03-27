import "./showproduct.css"

import { useState ,useEffect} from "react"
import axios from "axios"
import { useDispatch ,useSelector} from "react-redux";
import { useLocation } from 'react-router-dom';
import {addtocart} from "../../../slices/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Showproduct=()=>{

  // const [proData,setProData] = useState([]); 
  const mycart = useSelector((state)=>state.cartSlice.cart);
  const dispatch = useDispatch();

  // console.log(allproduct);

  // const [selectedSize, setSelectedSize] = useState("");
  const [selectedSize, setSelectedSize] = useState(null); // Initialize selectedSize as null

  const location = useLocation();
  const productData = location.state;



  console.log("my data" ,productData);

  // Access individual properties if needed
  const { id, name, description, category, price, regularPrice, images, size } = productData;

const [myimg,setimg]=useState()



const handleSizeSelect = (sizeObj) => {
  setSelectedSize(sizeObj);
  // console.log("Selected Size:", sizeObj);
};

const myproductAdd = () => {
  if (selectedSize) {
    const existingCartItem = mycart.find((item) => item.id === id && item.size.label === selectedSize.label);
    if (existingCartItem) {
      dispatch(addtocart({ ...existingCartItem, quantity: existingCartItem.quantity + 1 }));
      toast.success('Product quantity updated in Cart', { autoClose: 2000 });
    } else {
      const existingDifferentLabelItem = mycart.find((item) => item.id === id && item.size.label !== selectedSize.label);
      if (existingDifferentLabelItem) {
        dispatch(addtocart({ ...existingDifferentLabelItem, size: selectedSize, quantity: 1 }));
        toast.success('New Product Added to Cart with different Size', { autoClose: 2000 });
      } else {
        dispatch(addtocart({ id, name, description, category, price, regularPrice, images, size: selectedSize, quantity: 1 }));
        toast.success('New Product Added to Cart', { autoClose: 2000 });
      }
    }
  } else {
    toast.error('Please select a size');
  }
};


// const myproductAdd = (productData) => {
//   dispatch(addtocart(productData));
//   alert("Product added to cart");
//     console.log({name});
// };




return(
    <>
    
     <div id="margin-top-slider1"></div>
    <div className="product_contaainer">
      {/* <!-- title menu start --> */}
      <div className="title_bar">
      </div>
      {/* <!-- title menu end --> */}

       {/* product details part start  */}
      <div className="product_details">
        {/* <!-- multiple image part start  */}
        <div className="multiple_product_image">
          <div>
            <img
              id="muliple_img1"
              src={images[0]}
              alt=""
              onLoad={()=>{setimg(images[1])}}
              onClick={()=>{setimg(images[2])}}
              onMouseEnter={()=>{setimg(images[3])}}
            />
          </div>
          <div>
            <img
              id="muliple_img2"
              src={images[1]}
              alt=""
              onClick={()=>{setimg(images[1])}}
              onMouseEnter={()=>{setimg(images[1])}}
            />
          </div>
          <div>
            <img
              id="muliple_img3"
              src={images[2]}
              alt=""
              onClick={()=>{setimg(images[2])}}
              onMouseEnter={()=>{setimg(images[2])}}
            />
          </div>
          <div>
            <img
              id="muliple_img4"
              src={images[3]}
              alt=""
              onClick={()=>{setimg(images[3])}}
              onMouseEnter={()=>{setimg(images[3])}}
            />
          </div>
          
        </div>
        {/* <!-- multiple product image part ends --> */}

        {/* <!-- main product page image start --> */}
        <div className="single_product_image">
          <div>
            <img
              id="main_img_1"
              src={myimg}
              
            />
          </div>
        </div>
        {/* <!-- main product page image start--> */}

        {/* <!-- product details start --> */}
        <div className="product_desc">
          <div className="web_name">
            <h6 >{name}</h6>
            <p id = "product_name_main">{description}</p>
            
            </div>
            <div className="price">
              <p style={{fontSize:"30px"}}>₹{price}</p> &nbsp;&nbsp;
              <p style={{textDecoration:"line-through"}} >₹{regularPrice}</p>&nbsp;&nbsp;
              <p id = "product_discount_percentage_main" >Discount</p>
            </div>
            <p>Inclusive of taxes</p>
            <hr />
            <p>
              TriBe Membership get an extra Discount of <b>₹40</b> and FREE shipping.
            </p>
            <a href="">Learn More</a>
            <hr />
            
            <div id="product_size">
                            <h3>Select Size</h3>
                            <p><a href="">Size Guide</a></p>
                        </div>
                        <div id="product_size_option">
                            {size.map((s, index) => (
                                           <span
                                           key={index}
                                           className={`ProSizes ${selectedSize === s ? "selected" : ""}`}
                                           onClick={() => handleSizeSelect(s)}
                                         >
                                           <p>{s.label}</p>
                                         </span>
                                 
                            ))}
                        </div>


            <div className="add_product_in_cart">
            <button className="procartbutton" onClick={myproductAdd}>Add to cart</button>
            </div>
            <hr />
            <div className="special_price_div">
              <li><h5>SAVE EXTRA WITH 2 OFFER</h5></li>
              <li>
                <span className="plus_icons_offer">+</span>
                <div className="special_price_offer"></div>
              </li>
            </div>
            <hr />
            <div className="special_price_div">
              <li><h5 >PRODUCT DESCRIPTION</h5></li>
              <li>
                <span className="plus_icons_pro_desc">+</span>
                <div className="special_price_desc"></div>
              </li>
            </div>
            <hr />
            <div className="special_price_div">
              <li><h5>15 DAY RETURN & EXCHANGE</h5></li>
              <li>
                <span className="plus_icons_policy">+</span>
                <div className="special_price_policy"></div>
              </li>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- product details ends --> */}
      <ToastContainer />

    </>
)

}
export default Showproduct;