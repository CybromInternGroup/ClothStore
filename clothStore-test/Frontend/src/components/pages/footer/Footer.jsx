
import "./footer.css"
const Footer=()=>{
   return(
    <>
    <div id="customer-section">
        {/* < customer section start */}
        <h1 style={{marginLeft:"15px"}}>AS FASHION</h1>
        <div class="customer-section-grid">
            {/* customer-section-grid start  */}
            <div style={{marginLeft:"15px"}}>
                <h4>Customer service</h4>
                <p><a href="">Contact us</a></p>
                <p><a href="">Track Order</a></p>
                <p><a href="">Return Order</a></p>
                <p><a href="">Cancel Order</a></p>
            </div>
            <div>
                <h4>Company</h4>
                <p><a href="">About us</a></p>
                <p><a href="">We're Hiring</a></p>
                <p><a href="">Terms & Conditions</a></p>
                <p><a href="">Privacy Policy</a></p>
                <p><a href="">Blog</a></p>
            </div>
            <div>
                <h4>Connect with us</h4>
                <p><a href="">0 People Like this</a></p>
                <p><a href="">0 Followers</a></p>
            </div>
            <div>
                <h4>Keep up to date</h4>
                <input placeholder="Enter Email id"/>
                <button class="subscribe-button">Subscribe</button>
            </div>
            <div>
                <p style={{marginLeft:"15px"}}><a href="">15 Days return policy</a></p>
                <p style={{marginLeft:"15px"}}><a href="">Cash on delivery*</a></p>
            </div>
            <div>
                <h4>Download the app</h4>
                <div id="download-the-app-images">
                    <div>
                        <img src="https://images.bewakoof.com/web/app_android_v1.png"/>
                    </div>
                    <div>
                        <img src="https://images.bewakoof.com/web/app_ios_v1.png"/>
                    </div>

                </div>
            </div>
            <div>
                <h4>100% secure payment</h4>
                <div>
                    <img src="https://images.bewakoof.com/web/secure-payments-image.png"/>
                </div>
            </div>
        </div>
         {/* customer-section-grid end  */}
         <hr/>
    </div>
    </>
   )
}
export default Footer;