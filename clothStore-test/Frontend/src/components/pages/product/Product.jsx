import "./product.css"
import img1 from "./img/1.webp"
import img2 from "./img/2.webp"
import img3 from "./img/3.webp"
import img4 from "./img/4.webp"
import img5 from "./img/5.webp"
import img6 from "./img/6.webp"
import img7 from "./img/7.webp"
import {useNavigate} from "react-router-dom"
const array=[
    {
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },
    {
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },{
        img:img1,
        discription:"first compoent",
        rate:"1366"
    },
]

const Product = ()=>{

    const navigate=useNavigate();

    const gotoshowproduct=()=>{
        navigate('/showproduct')
    }
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
            {array.map((key)=>
                
                <div>
                    <img src={key.img} alt=""/>
                    <div className="prodetail">
                    <h6>{key.discription}</h6>
                    <p>{key.rate}</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>)}
                {/* <div className="productbox" onClick={gotoshowproduct} >
                    <img src={img1} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>
               
                <div  className="productbox">
                    <img src={img2} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>
                
                <div>
                    <img src={img3} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>
                
                <div>
                    <img src={img4} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>
                
                <div>
                    <img src={img5}alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>
                
                <div>
                    <img src={img6} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div>

                
                <div>
                    <img src={img7} alt=""/>
                    <div className="prodetail">
                    <h6>Men's Black & Grey Color Block</h6>
                    <p>₹1299</p>
                     <button className="procartbutton">Add to cart</button></div>
                </div> */}
              {/* <!-- product item end here --> */}
        </div>
        </div>
    </div></div>
    </>
    )
}

export default Product;