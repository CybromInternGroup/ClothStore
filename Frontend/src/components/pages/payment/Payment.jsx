import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [selectedButton, setSelectedButton] = useState("payment-wallet");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);

    // Additional logic based on the clicked button
    switch (buttonId) {
      case "payment-wallet-button":


      document.getElementById("payment-debit-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-debit-button").style.borderLeft = "none";
      document.getElementById("payment-net-banking-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-net-banking-button").style.borderLeft = "none";
      document.getElementById("payment-wallet-button").style.backgroundColor = "white";
      document.getElementById("payment-wallet-button").style.borderLeft = "5px solid #ffc107";        
      document.getElementById("payment-upi-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-upi-button").style.borderLeft = "none";
      document.getElementById("payment-upi").style.display = "none";
      document.getElementById("payment-debit").style.display = "none";
      document.getElementById("payment-wallet").style.display = "block";
      document.getElementById("payment-net-banking").style.display = "none";

        break;
      case "payment-debit-button":

      document.getElementById("payment-debit-button").style.backgroundColor = "white";
      document.getElementById("payment-debit-button").style.borderLeft = "5px solid #ffc107";
      document.getElementById("payment-net-banking-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-net-banking-button").style.borderLeft = "none";
      document.getElementById("payment-wallet-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-wallet-button").style.borderLeft = "none";        
      document.getElementById("payment-upi-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-upi-button").style.borderLeft = "none";
      document.getElementById("payment-upi").style.display = "none";
      document.getElementById("payment-debit").style.display = "block";
      document.getElementById("payment-wallet").style.display = "none";
      document.getElementById("payment-net-banking").style.display = "none";

        break;

      case "payment-upi-button":
               document.getElementById("payment-debit-button").style.backgroundColor = "whitesmoke";
              document.getElementById("payment-debit-button").style.borderLeft = "none";
              document.getElementById("payment-net-banking-button").style.backgroundColor = "whitesmoke";
              document.getElementById("payment-net-banking-button").style.borderLeft = "none";
              document.getElementById("payment-wallet-button").style.backgroundColor = "whitesmoke";
              document.getElementById("payment-wallet-button").style.borderLeft = "none";        
              document.getElementById("payment-upi-button").style.backgroundColor = "white";
              document.getElementById("payment-upi-button").style.borderLeft = "5px solid #ffc107";
              document.getElementById("payment-upi").style.display = "block";
              document.getElementById("payment-debit").style.display = "none";
              document.getElementById("payment-wallet").style.display = "none";
              document.getElementById("payment-net-banking").style.display = "none";
             
        break;
      case "payment-net-banking-button":
          
      document.getElementById("payment-debit-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-debit-button").style.borderLeft = "none";
      document.getElementById("payment-net-banking-button").style.backgroundColor = "white";
      document.getElementById("payment-net-banking-button").style.borderLeft = "5px solid #ffc107";
      document.getElementById("payment-wallet-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-wallet-button").style.borderLeft = "none";        
      document.getElementById("payment-upi-button").style.backgroundColor = "whitesmoke";
      document.getElementById("payment-upi-button").style.borderLeft = "none";
      document.getElementById("payment-upi").style.display = "none";
      document.getElementById("payment-debit").style.display = "none";
      document.getElementById("payment-wallet").style.display = "none";
      document.getElementById("payment-net-banking").style.display = "block";
                  
        break;
      default:
        break;
    }
  };

  const handleCardPayNowButtonClick = () => {
    var person = prompt("Please enter your OTP");
    // Handle OTP logic here
  };


    

    return(
        <>
        
    
    <div id="full">
    <div id="payment-price">
      <h2>Payment</h2>
      <h2>Price ₹<span id="payment-amount">1048</span></h2>
    </div>
    <div id = "payment-mode">
        <div id = "left-payment-mode">
            <button onClick={() => handleButtonClick("payment-debit-button")} id = "payment-debit-button">DEBIT/CREDIT CARD</button>
            <button onClick={() => handleButtonClick("payment-wallet-button")} id ="payment-wallet-button">WALLET</button>
            <button onClick={() => handleButtonClick("payment-upi-button")} id = "payment-upi-button">UPI</button>
            <button onClick={() => handleButtonClick("payment-net-banking-button")} id = "payment-net-banking-button">NET BANKING
             </button>
            <button id = "payment-cod-button"> <p>CASH ON DELIVERY</p> 
                <p>Cash on Delivery is currently unavailable</p>
            </button>
        </div>
        <div id = "right-payment-mode">
            <div id = "payment-debit">
                <div>
                   <i class="fa fa-cc-paypal" style={{fontSize:"36px"}}></i>
                    <p>Add New Card</p>
                  </div>
                  <input className="inputte"  type="text" id="card-number" placeholder="Card Number" />
                  <input className="inputte" type="text" id="card-name" placeholder="Name on Card" />
                  <input className="inputte" type="text" id="card-expiry" placeholder="Expiry (MM/YY)" />
                  <input className="inputte" type="password" id="card-password" placeholder="CVV" />
                  <div id = "card-payment-div2">
                      <input className="inputte" type="checkbox" id = "card-checkbox"/>
                      <label id = "card-payment-para1">Securely save this card for faster payments.</label>
                  </div>
                  <p>
                    This transaction you make is totally secure. We don't save your
                    CVV number.
                  </p>
                  <button onClick={handleCardPayNowButtonClick} id="card-pay-now-button">PAY NOW</button>
                </div>
            <div id = "payment-wallet">
                <div>
                        <img src="https://images.bewakoof.com/web/paytm-1556185965.png" alt=""/>
                        <p>Paytm</p>
                        <input className="inputte" type="radio"/>
                </div>
                <div>
                        <img src="https://images.bewakoof.com/web/phonepe-1556185963.png" alt=""/>
                        <p>Phone Pe</p>     
                        <input className="inputte" type="radio"/>             
                </div>
                <div>
                        <img src="https://images.bewakoof.com/web/amazonpay-icon-1600094438.png" alt=""/>          
                        <p>Amazon Pay</p>                   
                        <input className="inputte" type="radio"/>               
                </div>
                <div>             
                        <img src="https://images.bewakoof.com/web/mobikwik-1556185968.png" alt=""/>            
                        <p>Mobikwik</p>          
                        <input className="inputte" type="radio"/>                 
                </div>
                <div>                
                        <img src="https://images.bewakoof.com/web/bitmap-copy.jpg" alt=""/>             
                        <p>Freecharge</p>                  
                        <input className="inputte" type="radio"/>                   
                </div>
            </div>
            <div id="payment-upi">
                    <div>
                        <img src="https://images.bewakoof.com/web/upi-logo.png" alt=""/>
                        <p>Add UPI</p>
                        <input className="inputte" type="radio"/>
                     </div>
                    <input className="inputte" type="text" placeholder="Enter UPI ID"/>
                    <p>UPI ID is in the format of mobilenumber@bank or username@bank</p>
                    <div>
                        
                        {/* <!-- <input type="checkbox" name="" id=""> --> */}
                            <p>	Save this UPI ID for future payments.</p>
                        
                        
                    </div>
                     <button>VERIFY</button>
            </div>
            <div id="payment-net-banking">
                <div>
                    <img src="https://images.bewakoof.com/web/icici-1556185960.png" alt=""/>
                    <p>ICICI</p>
                    <input className="inputte" type="radio"/>
            </div>
            <div>
                    <img src="https://images.bewakoof.com/web/axis-1556185962.png" alt=""/>
                    <p>Axis</p>     
                    <input className="inputte" type="radio"/>             
            </div>
            <div>
                    <img src="https://images.bewakoof.com/web/sbi-1556185961.png" alt=""/>          
                    <p>SBI</p>                   
                    <input className="inputte" type="radio"/>               
            </div>
            <div>             
                    <img src="https://images.bewakoof.com/web/hdfc-1556185961.png" alt=""/>            
                    <p>HDFC</p>          
                    <input className="inputte" type="radio"/>                 
            </div>
            <div>                
                    <img src="https://images.bewakoof.com/web/kotak-1556185967.png" alt=""/>             
                    <p>Kotak</p>                  
                    <input className="inputte" type="radio"/>                   
            </div>
            <div>                
                <img src="https://images.bewakoof.com/web/other-bank-icon-1600258256.png" alt=""/>             
                <p>Others</p>                  
                <button id = "payment-net-other-arrow">∟</button>                 
        </div>
        <p>You will be redirected to the banks website to complete the payment process.</p>
            </div>
        </div>
    </div>
    </div>
        
        </>
    )
}
export default Payment;