import "./ordersummery.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import emptyaddress from "./emptyaddress.jpg"
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const Ordersummery=()=>{


    const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
    const subTotalPrice = useSelector((state) => state.cartSlice.subTotalPrice);
    const mycart = useSelector((state) => state.cartSlice.cart);
   console.log(totalPrice);
    const navigate=useNavigate();

    const paymentpage=()=>{
        navigate('/payment')
    }

    const [isAddressVisible, setAddressVisible] = useState(false);
    const [addressData, setAddressData] = useState({
        fullname: "",
        mobile: "",
        pincode: "",
        city: "",
        state: "",
        area: "",
        flatNo:"",
        landmark: "",
    });


    const handleAddressSave = async () => {
        try {
          const url = "http://localhost:5000/addaddress";
          await axios.post(url, addressData);
          toast.success("Address Added Successfully!!")
          navigate('/ordersummery')
        } catch (error) {
            console.error("Error saving address:", error);
            toast.error("Error while adding Address !!")
          // Handle error (e.g., show error message to the user)
        }
      };

      const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');

      useEffect(() => {
          const currentDate = new Date();
          const estimatedDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
          const formattedDate = estimatedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          });
          setEstimatedDeliveryDate(formattedDate);
      }, []);



    const Handelchange = (e) => {
        const { name, value } = e.target;
        setAddressData({
            ...addressData,
            [name]: value,
        });
        console.log(addressData);
    };


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
                    {addressData.fullname ? (
                    <>
                        <h4>
                            <span className="address-fullname">{addressData.fullname}</span>
                            <span className="other_span">Other</span>
                        </h4>
                        <p>
                            <span className="flatno">{addressData.flatNo}</span>
                            <span className="city_district">{addressData.city}</span>
                            <span className="state">{addressData.state}</span>
                            <span className="pincode">{addressData.pincode}</span>
                        </p>
                        <p><span className="mobilenumber">{addressData.mobile}</span></p>
                    </>
                ) : (
                    <img src={emptyaddress} width={170}  style={{paddingLeft:"70%"}} alt="Empty Address" />
                )}
                       <button onClick={Addresspage} style={{marginLeftLeft:"70%"}} > {addressData.fullname ? "CHANGE ADDRESS" : "Add Address" }</button>
                    </div>
                </div>
                <div id="delivery-estimate">
                    <h5 className="delivery-price-estimated-color">ESTIMATED DELIVERY</h5>
                    <p className="shipment-total-items">Shipment 1 of {mycart.length} : By {estimatedDeliveryDate}</p>
                    <div className="deleivery-adress-prdt-append">
                        {/* <div className="deleivery-adress-prdt">
                            <img height="100%"
                                src="https://images.bewakoof.com/t320/not-ordinary-round-neck-3-4-sleeves-t-shirts-women-s-printed-round-neck-3-4-sleeve-t-shirts-354972-1621408984.jpg"/>
                            <div>
                                <p>Not Ordinary Round Neck 3/4 Sleeves T-shirt</p>
                                <p> Qty : 1</p>
                            </div> */}
                     {mycart.map((item) => (
                  <div key={item.id} className="deleivery-adress-prdt">
                    {/* <img src={item.image} alt={item.name} /> */}
                    <div>
                      <h4>{item.name}  </h4>
                      <p>{item.description}</p>
                      {/* <h4>{item.name}</h4> */}
                    </div>
                  </div>
                ))}


                        <br/>
                    </div>
                </div>
            </div>
            <div id="summary-shown-right">

                <div id="cont-price-summ" className="delivery-price-estimated-color">PRICE SUMMARY</div>
                <div id="price-summary">
                  <div>
                    <p>Total MRP (Incl. of taxes)</p>
                    <p>Delivery Fee </p>
                    <p  style={{ color: " rgb(5, 227, 57)" }}>Discount </p>
                    <p>Subtotal </p>
                  </div>
                  <div>
                    <p className="total_calculate_price">₹{totalPrice}</p>
                    <p style={{ color: " rgb(5, 227, 57)" }}>FREE</p>
                    <p className="Subtotal" style={{ color: " rgb(5, 227, 57)" }}>₹{totalPrice-subTotalPrice}</p>
                    <p className="Subtotal">₹{subTotalPrice}</p>
                  </div>
                </div>
                <div className="offer-div" id="saving-div"></div>
                <div id="Total-amount-address">
                <div>
                    <p style={{ fontSize: "20px" }}>Total : ₹ {subTotalPrice}</p>
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
        <input type="text" placeholder="Fullname" className="address-fullname" name="fullname" value={addressData.fullname} onChange={Handelchange}  />
        <input type="text" placeholder="Mobile number" className="address-mobilenumber"    name="mobile" value={addressData.mobile} onChange={Handelchange}  />
        <input type="text" placeholder="Flatno/Building,Street name" className="address-flatno"  name="flatNo" value={addressData.flatNo} onChange={Handelchange}  />
        <div id="city-district">
            <input type="text" placeholder="City/District" className="address-city-district" name="city" value={addressData.city} onChange={Handelchange}   />
            <input type="text" placeholder="State" className="address-state"  name="state" value={addressData.state} onChange={Handelchange}  />
        </div>
        <input type="text" placeholder="Area/Locality" className="address-area"  name="area" value={addressData.area} onChange={Handelchange}  />
        <input type="pincode" placeholder="Pincode" className="address-pincode" name="pincode" value={addressData.pincode} onChange={Handelchange}   />
        <input type="text" placeholder="Landmark(optional)" className="address-landmark" />
        {/* <div className="Save-address-flex">
            <p>Save Address As</p>
            <button onclick="home_button()">Home</button>
            <button onclick="office_button()">Office</button>
            <button onclick="other_button()">Other</button>
        </div> */}
        <div className="saveaddress-cancel">
            <button type="submit" id="btn-address-save"  onClick={handleAddressSave}>SAVE ADDRESS</button>
            <button onClick={Addresspage}> CANCEL</button>
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