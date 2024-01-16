import "./ordersummery.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ordersummery=()=>{

    const navigate=useNavigate();

    const paymentpage=()=>{
        navigate('/payment')
    }

    const [isAddressVisible, setAddressVisible] = useState(false);
    const Addresspage=()=>{
        setAddressVisible(!isAddressVisible);

    }
    
    
   
    return(
        <>
        <div id="total-order-summary-page">
        
        <p id="summary-items">Order Summary</p>
        <div id="summary-shown-details">
            <div id="summary-shown-left">
                <div id="summary-push-prdt">
                    <p className="delivery-price-estimated-color">DELIVERY ADDRESS</p>
                    <div id="delivery-details">
                        <h4> <span className="address-fullname">Atul Sahu </span><span className="other_span">Other</span>
                        </h4>
                        <p> <span className="flatno">6-138,MP Nagar, xyz,</span>
                            <span className="city_district">Bhopal</span> ,<span className="state">Madhya Pradesh</span> ,
                            <span className="pincode">517592</span>
                        </p>
                        <p>Mobile :<span className="mobilenumber">
                                8435180592
                            </span> </p>
                        <button onClick={Addresspage} >CHANGE ADDRESS</button>
                    </div>
                </div>
                <div id="delivery-estimate">
                    <h5 className="delivery-price-estimated-color">ESTIMATED DELIVERY</h5>
                    <p className="shipment-total-items">Shipment 1 of 2 : By 30 January 2022</p>
                    <div className="deleivery-adress-prdt-append">
                        <div className="deleivery-adress-prdt">
                            <img height="100%"
                                src="https://images.bewakoof.com/t320/not-ordinary-round-neck-3-4-sleeves-t-shirts-women-s-printed-round-neck-3-4-sleeve-t-shirts-354972-1621408984.jpg"/>
                            <div>
                                <p>Not Ordinary Round Neck 3/4 Sleeves T-shirt</p>
                                <p> Qty : 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="summary-shown-right">

                <div id="cont-price-summ" className="delivery-price-estimated-color">PRICE SUMMARY</div>
                <div id="price-summary">
                    <div>
                        <p>Total MRP (Incl. of taxes)</p>
                        <p>Delivery Fee </p>
                        <p>Bag Discount </p>
                        <p>Subtotal </p>
                    </div>
                    <div>
                        <p className="total_calculate_price">0</p>
                        <p>FREE</p>
                        <p className="bag-discount">0</p>
                        <p className="Subtotal">0</p>
                    </div>


                </div>
                <div className="offer-div" id="saving-div"></div>
                <div id="Total-amount-address">
                    <div>
                        <p>Total</p>
                        <p className="Grand-total-pay">0</p>
                    </div>
                    <div>
                        <button id="adress-payment-btn" onClick={paymentpage} >CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* -----------------Address---------------- */}
{isAddressVisible && (
        <div className="total-adress-page address-active">

<div className="total-adress-page">
    <div className="adress-overlay">
        <h2>Add New Address</h2>
        <input type="text" placeholder="Fullname" className="address-fullname"></input>
        <input type="text" placeholder="Mobile number" className="address-mobilenumber"></input>
        <input type="pincode" placeholder="Pincode" className="address-pincode"></input>
        <div id="city-district">
            <input type="text" placeholder="City/District" className="address-city-district"></input>
            <input type="text" placeholder="State" className="address-state"></input>
        </div>
        <input type="text" placeholder="Flatno/Building,Street name" className="address-flatno"></input>
        <input type="text" placeholder="Area/Locality" className="address-area"></input>
        <input type="text" placeholder="Landmark(optional)" className="address-landmark"></input>
        <div className="Save-address-flex">
            <p>Save Address As</p>
            <button onclick="home_button()">Home</button>
            <button onclick="office_button()">Office</button>
            <button onclick="other_button()">Other</button>
        </div>
        <div className="saveaddress-cancel">
            <button type="submit" id="btn-address-save">SAVE ADDRESS</button>
            <button>CANCEL</button>
        </div>
        {/* <span id="adress-close">&times</span> */}
    </div>
</div>

<span id="adress-close" onClick={Addresspage}>&times;</span>
        </div> )}


        </>
    )
}
export default Ordersummery;