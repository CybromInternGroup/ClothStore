
import  "./cart.css";
import cartimg from "./cart1.jpg"
import truck from "./truck.jpg"
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    
    const navigate = useNavigate();

    const gotoordersummery = () => {
      navigate('/ordersummery');
    };

    return(
        <>

<div id="cartpage-total-div">

{/* <div id="cart-head-const">
<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AS Fashion</h1>
    <span>Signed as:<p><a href="atul8435180@gmail.com" style={{color:"white"}}>atul8435180@gmail.com</a></p></span>
</div> */}

<p id="total-items-cart">My Bag 1 item(s)</p>
<div id="cart-append-change">
    <div id="cart-shown-images">
        <div id="cart-shown-left">

            <div className="offer-div" id="left-offer-color">

                <p> <span>
                    <img className="truckmove" src={truck} alt="truck"
                            style={{width: "20px", height: "20px", animationDuration: "2s"}}/>
                    
                        </span>Yay! You get FREE
                    delivery on this order</p>
            </div>
            <div id="cart-dom-clear">
                <div id="cart-push-prdt">
                    <div id="cart-descr-img">
                        <div id="cart-descr">
                            <p>Know Your Power Boyfriend T-Shirt</p>
                            <p id="actual_price">₹275 <span id="mrp-price"></span></p>
                            <div>
                                <p className="green-color">You saved ₹<span id="saved-amt">526</span>!</p>
                                 <p style={{color:"red"}}>Hurry!Only 3 Left!</p>
                            </div>

                            <div id="size-qty">
                                <div id="size">
                                    {/* <!-- select start  --> */}
                                    <select id="select-value">
                                        <option>size:</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        
                                    </select>
                                    {/* <!-- select end  --> */}
                                </div>
                                <div id="qty">
                                    {/* <!-- qty start  --> */}
                                    <select>
                                        <option>quantity:</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>

                                        <option>4</option>

                                        <option>5</option>
                                        

                                    </select>
                                    {/* <!-- qty end  --> */}

                                </div>
                            </div>

                        </div>
                        <div id="cart-img">
                            <img
                                src={cartimg}/>
                        </div>
                    </div>
                    {/* <!-- cart-desc-img-end --> */}
                    <hr/>
                    <div id="remove-wishlist">
                        <div>Remove</div> 
                        <div>Add to Whishlist</div> 
                    </div>
                </div>
                {/* <!-- cart-push-prdt end --> */}
            </div>
        </div>

<div id="cart-shown-right">

<div className="offer-div" id="offer-div">
<p>Save extra ₹52 with TriBe</p>

</div>
<div id="border-grey">
<div className="referal-redeem">
    <div>
        <div id="Coupon-btn">
            Apply Coupon / Girt Card &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Redeem </div>
        {/* <!-- <div>Redeem >></div> --> */}
    </div>
</div>
<div>

    <div id="cont-price-summ" className="offer-div">PRICE SUMMARY</div>
    <div id="price-summary">
        <div>
            <p>Total MRP (Incl. of taxes)</p>
            <p>Delivery Fee </p>
            <p>Bag Discount </p>
            <p>Subtotal </p>
        </div>
        <div>
            <p className="total_calculate_price">₹4234</p>
            <p style={{color:" rgb(5, 227, 57)"}}>FREE</p>
            <p className="bag-discount">-₹2234</p>
            <p className="Subtotal">₹3000</p>
        </div>

    </div>
    <div className="offer-div" id="saving-div">You are saving ₹2234 on this order</div>
    <div id="Total-amount-address">
        <div>
            <p>Total</p>
            <p className="Grand-total-pay">₹3000</p>
        </div>
        <div>
            <button onClick={gotoordersummery} id="adress-payment-btn">Proceed to Shipping</button>
        </div>
    </div>
</div>
</div>
</div>

</div>
<div id="payment_secure">
<img src="https://images.bewakoof.com/web/secure-payments-image.png"/>
</div>
</div>

</div>


</>
    )
}

export default Cart;