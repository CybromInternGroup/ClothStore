import "./product.css"
import axios from "axios"
import {useNavigate,useLocation} from "react-router-dom"
import { useEffect,useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addtocart } from "../../../slices/cartSlice";
import { useSearch } from "../../../SearchContext";
import noproduct from './img/noproduct6.png'

const Product = ()=>{

    const [proData,setProData] = useState([]); 
    const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of products to display
    const { searchQuery,setSearchQuery } = useSearch();
    const mycart = useSelector((state)=>state.cartSlice.cart);
    const dispatch = useDispatch();
    const location = useLocation();

    // console.log("pro",filteredProducts)
    
    console.log(mycart);
    
const  loadProductData= async ()=>{
  
    await axios.get("http://localhost:8000/AdminproductDisplay").then((res)=>{
      console.log(res.data);
      setProData(res.data)
    }).catch((error)=>{
      console.log("Error While Featching Data",error);
    })
  }
  
  useEffect(()=>{
    loadProductData()
    const urlParams = new URLSearchParams(location.search);
    const initialSearchQuery = urlParams.get("search");
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [location.search]);

  const myproductAdd=(id,name , description,category,price,regularPrice,images,size )=>{
    dispatch(addtocart ({id:id ,name:name ,description:description,category:category,price:price,regularPrice:regularPrice,images:images,size:size} ))
  }

    const navigate=useNavigate();


    const AllProductData=((id,name , description,category,price,regularPrice,images,size)=>{
        // dispatch(addtocart ({id:id ,name:name ,description:description,category:category,price:price,regularPrice:regularPrice,images:images,size:size} ))
        console.log("Data is comming");
        console.log({name});
    })

    const gotoshowproduct = (id, name, description, category, price, regularPrice, images, size) => {
        const productData = { id, name, description, category, price, regularPrice, images, size };
        AllProductData(productData);
        navigate('/showproduct', { state: productData });
    }

//pagination

const handleShowMore = () => {
    if (visibleProducts < proData.length) {
      setVisibleProducts((prevVisible) => prevVisible + 3);
    } else {
      setVisibleProducts(6);
    }
  };

  

  const filteredProducts = proData.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

    
    return (
    <> 
    
{/* <div id = "margin-top-slider1"></div> */}
<div id="product-main">

{/* <div className="popup" id="popup-1" >
    <div className="overlay"></div>
    <div className="spinner1">

    </div>
</div> */}

<div id="product_container">
    {/* <!-- top menu start --> */}
    {/* <div className="catName">
        <ul>
            <li><a href="">Products</a></li>
            <li>/</li>
            <li><a href="">Men Clothing</a></li>
            <li>/</li>
            <li><a href="" >Jackets for Men</a></li>
        </ul>
    </div> */}
    {/* <!-- top nav menu end -->
    <!-- side filter start --> */}
    <br/> <br/>
    <div>
        <h2 id="cloth">Men Cloths</h2>
        <div className="hrline1"></div></div>
    <div className="Number_of_Cat_item_and_name">
        <div className="hn">
            
             <select name="" id="sortPrice">
                <option value="popular"> Sort By: Popular</option>

                <option value="new">New</option>
                <option value="high">Price :High to Low</option>
                <option value="low">Price :Low to High</option>
                    

            </select> 
            </div>
        <div className="hn">
            
             <select name="" id="sortPrice">
                <option value="popular"> Size</option>

                <option value="low">XS</option>
                <option value="new">S</option>
                <option value="high">M</option>
                <option value="low">L</option>
                <option value="low">XL</option>
                    

            </select> 
            </div>
    </div>
    <div className="product_item_left_nav">
        <div className="left_filter_nav">
            <ul>
                <h3>Filters</h3>
                <li><a href="">Size</a><a href=""><i className="fas fa-chevron-circle-down"></i>
                 <div className="hrline"></div>
                  <div className="sub_item">
                    <ul>
                        <li><input type="checkbox" id="cb1"/><a href="" id="Xs">Xs</a></li>
                        <li><input type="checkbox"/><a href="">XS</a></li>
                        <li><input type="checkbox"/><a href="">S</a></li>
                        <li><input type="checkbox"/><a href="">M</a></li>
                        <li><input type="checkbox"/><a href="">L</a></li>
                        <li><input type="checkbox"/><a href="">XL</a></li>
                    </ul>
                  </div>
                </a>
             </li>
                {/* <li><a href="">Brand</a><a href=""><i className="fas fa-chevron-circle-down"></i></a>
                    <div className="sub_item">
                        <ul>
                            
                            <li><a href="">High Star</a></li>
                            <li><a href="">Marca Disati</a></li>
                            <li><a href="">Soxytoes</a></li>
                            <li><a href="">Sweet Dream</a></li>
                            <li><a href="">Recap</a></li>
                        </ul>
                      </div></li> */}

                <li><a href="">Sort_By</a><a href=""><i className="fas fa-chevron-circle-down"></i></a>
                <div className="hrline"></div>
                    <div className="sub_item">
                        <ul>
                            <li><input type="checkbox" /><a href="" >Popular</a></li>
                            <li><input type="checkbox" /><a href="">New</a></li>
                            <li><input type="checkbox" /><a href="">Price:High To Low</a></li>
                            <li><input type="checkbox" /><a href="">Price:Low to Hogh</a></li>
                        </ul>
                      </div>
                    </li>
            </ul>
        </div>
        
        <div className="product_item_box">
        {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleProducts).map((key) => (
                
                <div className="ProductDiv" key={key._id}>
                    
                    <img onClick={()=>gotoshowproduct(key._id,key.name , key.description,key.category,key.price,key.regularPrice,key.images,key.size)} src={key.images[0]} alt=""/>
                    <div className="prodetail">
                    <p style={{fontSize:"25px",marginTop:"10px"}}>{key.name}</p>
                    <p className="prodescription">{key.description}</p>
                    <p  style={{fontSize:"22px"}}>Rs. {key.price}  <span style={{fontSize:"14px",textDecoration:"line-through",color:"red"}}>Rs. {key.regularPrice}</span></p> 
                     <button className="procartbutton"  onClick={()=>myproductAdd(key._id,key.name , key.description,key.category,key.price,key.regularPrice,key.images,key.size)}>Add to cart</button>
                     {/* <button className="procartbutton" onClick={gotoshowproduct}>Buy Now</button> */}
                     </div>
                     <br/>

                </div>))
                ) : (
                  // <h1 className="noproduct">No products available</h1>
                  <img src={noproduct} style={{width:"500px",marginTop:"8%",marginLeft:"30%"}}/>
                  )  
              }
               
        </div>
        </div>
    </div>
    </div>

    {filteredProducts.length > 3 ? (
    <div className="show-more-button">
    <button onClick={handleShowMore}>
          {visibleProducts < proData.length ? 'Show More' : 'Show Less'}
    </button>
      </div>
      ): null}

    </>
    )
}

export default Product;