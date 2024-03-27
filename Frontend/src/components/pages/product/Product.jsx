import "./product.css"
import axios from "axios"
import {useNavigate,useLocation} from "react-router-dom";
import { useEffect,useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addtocart,addToWishlist,removeFromWishlist } from "../../../slices/cartSlice";
import { useSearch } from "../../../SearchContext";
import noproduct from './img/noproduct6.png'
import { FaHeart } from "react-icons/fa";

const Product = ()=>{

    const [proData,setProData] = useState([]); 
    const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of products to display
    const [sortOrder, setSortOrder] = useState("default");
    const { searchQuery,setSearchQuery } = useSearch();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [wishlistIds, setWishlistIds] = useState([]);
    const [showAllBrands, setShowAllBrands] = useState(false);
    const [brandsList, setBrandsList] = useState([]); //  
    const mycart = useSelector((state)=>state.cartSlice.cart);
    const wishlist = useSelector((state) => state.cartSlice.wishlist);
    const dispatch = useDispatch();
    const location = useLocation();

    // console.log("pro",filteredProducts)
    
    console.log(mycart);
    
const  loadProductData= async ()=>{
  
    await axios.get("http://localhost:5000/AdminproductDisplay").then((res)=>{
      console.log(res.data);
      setProData(res.data)
    }).catch((error)=>{
      console.log("Error While Featching Data",error);
    })
  }
  
  useEffect(()=>{
  fetchBrands()
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

 

const addToWishlistHandler = (id, name, description, category, price, regularPrice, images, size) => {
  const product = { id, name, description, category, price, regularPrice, images, size };
  if (wishlistIds.includes(id)) {
      dispatch(removeFromWishlist(id));
      setWishlistIds(prevIds => prevIds.filter(itemId => itemId !== id));
  } else {
      dispatch(addToWishlist(product));
      setWishlistIds(prevIds => [...prevIds, id]);
  }

  const updatedWishlist = wishlistIds.includes(id) ? wishlistIds.filter(itemId => itemId !== id) : [...wishlistIds, id];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

};

useEffect(() => {
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const filteredWishlistIds = storedWishlist.filter(itemId => itemId !== null);
  setWishlistIds(filteredWishlistIds);
}, []);


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

  //Brand Api 

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getbrand");
      setBrandsList(response.data); // Update brands list in state
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleShowMoreBrands = () => {
    setShowAllBrands(!showAllBrands);
  };

  // filter

   const handleBrandFilter = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
  };

  
  const handlePriceRangeFilter = (minPrice, maxPrice) => {
    const existingRangeIndex = selectedPriceRanges.findIndex(
      range => range[0] === minPrice && range[1] === maxPrice
    );
  
    if (existingRangeIndex !== -1) {
      // If the range is already selected, remove it
      const updatedRanges = [...selectedPriceRanges];
      updatedRanges.splice(existingRangeIndex, 1);
      setSelectedPriceRanges(updatedRanges);
    } else {
      // Add the new range to the selected ranges
      setSelectedPriceRanges([...selectedPriceRanges, [minPrice, maxPrice]]);
    }
  };
  

  const filterAndSortProducts = () => {
    const filtered = proData.filter((product) => {
      // Check if product and product description are defined
      if (product && product.description) {
        return (
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (selectedBrands.length === 0 || selectedBrands.includes(product.name)) &&
          (selectedPriceRanges.length === 0 ||
            selectedPriceRanges.some(
              (range) => product.price >= range[0] && product.price <= range[1]
            ))
        );
      }
      return false; // Skip products without description
    });
  
    if (sortOrder === "highToLow") {
      return filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowToHigh") {
      return filtered.sort((a, b) => a.price - b.price);
    } else {
      return filtered;
    }
  };
  

  const filteredAndSortedProducts = filterAndSortProducts();

  const handleSortChange = (e) => {
    const newSortOrder = e.target.checked ? e.target.value : null;
    setSortOrder(newSortOrder);
  };
    
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
                <option value="popular"> Sort By: 0-499</option>
                <option value="new">500-999</option>
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
                          <li>
            Brands
          
              <i className="fas fa-chevron-circle-down"></i>
              <div className="hrline"></div>
              <div className="sub_item">
                <ul>
                  {/* {brandsList.map((brand) => (
                    <li key={brand}>
                      <input
                        type="checkbox"
                        id={`cb_${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandFilter(brand)}
                      />
                      <label htmlFor={`cb_${brand}`}>{brand}</label>
                    </li>
                  ))} */}
                   {brandsList.slice(0, showAllBrands ? brandsList.length : 4).map((brandObj) => (
                      <li key={brandObj._id}>
                        <input
                          type="checkbox"
                          id={`cb_${brandObj._id}`}
                          checked={selectedBrands.includes(brandObj.brand)}
                          onChange={() => handleBrandFilter(brandObj.brand)}
                        />
                        <label htmlFor={`cb_${brandObj._id}`}>{brandObj.brand}</label>
                      </li>
                    ))}
                                        {/* Conditionally render the "Show More" button */}
                                        {!showAllBrands && brandsList.length > 4 && (
                            <div className="show-more">
                              <button onClick={handleShowMoreBrands}>Show More</button>
                            </div>
                          )}
                          {showAllBrands && (
                            <div className="show-more">
                              <button onClick={handleShowMoreBrands}>Show Less</button>
                            </div>
                          )}
                </ul>
              </div>
          
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

                <li>Sort_By<i className="fas fa-chevron-circle-down"></i>
                <div className="hrline"></div>
                    <div className="sub_item">
                        <ul>
                            <li><input type="checkbox" onChange={() => handlePriceRangeFilter(0, 499)} /> ₹ 0 - ₹ 499</li>
                            <li><input type="checkbox" onChange={() => handlePriceRangeFilter(500, 999)} /> ₹ 500 - ₹ 999</li>
                            <li><input type="checkbox" onChange={() => handlePriceRangeFilter(1000, 1499)} /> ₹ 1000 - ₹ 1499</li>
                            <li><input type="checkbox" onChange={handleSortChange} value="highToLow" checked={sortOrder === "highToLow"}/>Price:High To Low</li>
                            <li><input type="checkbox" onChange={handleSortChange} value="lowToHigh" checked={sortOrder === "lowToHigh"}/>Price:Low to Hogh</li>
                        </ul>
                      </div>
                    </li>
            </ul>
        </div>
        
        <div className="product_item_box">
        {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.slice(0, visibleProducts).map((key) => (
                
                <div className="ProductDiv" key={key._id}>
                     <div className={`hearticon ${wishlistIds.includes(key._id) ? 'redHeart' : ''}`}>
                      <FaHeart  className="faheart" onClick={() => addToWishlistHandler(key._id,key.name,key.description,key.category,key.price,key.regularPrice,key.images,key.size) } /></div>
                    <img onClick={()=>gotoshowproduct(key._id,key.name , key.description,key.category,key.price,key.regularPrice,key.images,key.size)} src={key.images[1]} alt=""/>
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

    {filteredAndSortedProducts.length > 3 ? (
    <div className="show-more-button">
    <button onClick={handleShowMore}>
          {visibleProducts < proData.length ? 'Show More' : 'Show Less'}
    </button>
      </div>
      ): null}

    </>
    )
}

export default Product;