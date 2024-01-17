import "./product.css"
import img1 from "./img/1.webp"
import img2 from "./img/2.webp"
import img3 from "./img/3.webp"
import img4 from "./img/4.webp"
import img5 from "./img/5.webp"
import img6 from "./img/6.webp"
import img7 from "./img/7.webp"

const Products = ()=>{

    return (
    <> 
    
<div id = "margin-top-slider1"></div>

<div className="popup" id="popup-1" >
    <div className="overlay"></div>
    <div className="spinner1">

    </div>
</div>

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
    <div className="Number_of_Cat_item_and_name">
        <a href=""><h2 style={{color: "#ffc107",  position: "fixed" ,borderBottom:" 2px solid #ffc107"}}>Jackets for Men</h2></a>
        
            <select name="" id="sortPrice">
                <option value="popular"> Sort By: Popular</option>
                <option value="new">New</option>
                <option value="high">Price :High to Low</option>
                <option value="low">Price :Low to High</option>
            </select>
    </div>
    <div className="product_item_left_nav">
        <div className="left_filter_nav">
            <ul>
                <h5>Filters</h5>
                <li><a href="">Size</a><a href=""><i className="fas fa-chevron-circle-down"></i>
                  <div className="sub_item">
                    <ul>
                        <li><a href="">Xs</a></li>
                        <li><a href="">S</a></li>
                        <li><a href="">M</a></li>
                        <li><a href="">L</a></li>
                        <li><a href="">XL</a></li>
                    </ul>
                  </div>
                </a>
             </li>
                <li><a href="">Brand</a><a href=""><i className="fas fa-chevron-circle-down"></i></a>
                    <div className="sub_item">
                        <ul>
                            
                            <li><a href="">High Star</a></li>
                            <li><a href="">Marca Disati</a></li>
                            <li><a href="">Soxytoes</a></li>
                            <li><a href="">Sweet Dream</a></li>
                            <li><a href="">Recap</a></li>
                        </ul>
                      </div></li>

                <li><a href="">Sort By</a><a href=""><i className="fas fa-chevron-circle-down"></i></a>
                    <div className="sub_item">
                        <ul>
                            <li><a href="">Popular</a></li>
                            <li><a href="">New</a></li>
                            <li><a href="">Price:High To Low</a></li>
                            <li><a href="">Price :Low to Hogh</a></li>
                        </ul>
                      </div>
                    </li>
            </ul>
        </div>
    
        <div className="product_item_box">
               
                <div>
                    <img src={img1} alt=""/>
                    <h6>Men's Black & Grey Color Block</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
               
                <div>
                    <img src={img2} alt=""/>
                    <h6>Product name</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
                
                <div>
                    <img src={img3} alt=""/>
                    <h6>Product name</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
                
                <div>
                    <img src={img4} alt=""/>
                    <h6>Product name</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
                
                <div>
                    <img src={img5}alt=""/>
                    <h6>Product name</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
                
                <div>
                    <img src={img6} alt=""/>
                    <h6>Product name</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>

                
                <div>
                    <img src={img7} alt=""/>
                    <h6>Men's Green Puffer Jacket</h6>
                    <ul><li><p>₹1299</p> <p></p></li></ul>
                     <p>Special Price</p>
                </div>
              {/* <!-- product item end here --> */}
        </div>
        </div>
    </div>
    </>
    )
}

export default Products;