import { NavLink } from "react-router-dom";
import "./paymentdone.css";

const PaymentDone=()=>{
    return(
        <>

<section className="page_404">
	<div className="errorcontainer">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg2">
			<h1 className="text-center ">Thank You Shopping!!</h1>
            <br/>
            <br/>
            <br/>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Payment successful ✅
		</h3>
		
		{/* <p></p> */}
		<NavLink to="/">
	<p className="link_404">Go to Home</p></NavLink>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        
        </>
    )
}
export default PaymentDone;