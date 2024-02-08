// import "../Components/myAddress.css";
import { useState } from "react";


const ProfilePayment = () =>{
const [saved, setsaved] = useState()
  const [name, setName] = useState({
    cardno:"",
    name:""
  });


  const HandelNameChange = (event) => {

    setName((prev)=>{
      return{
        ...prev,
        [event.target.name]:event.target.value
      }
    })
    console.log(name)
   
  }


    return (
        <>
          <div className="address-container">
 
          <div className="addcontainer">
            <h3 id="addheading">Add Card</h3>
            <input  type="number" placeholder="Card Number" name="cardno" value={name.cardno} onChange={HandelNameChange} /> <br/>
            <input  type="text" placeholder="Name on Card" name="name" value={name.name} onChange={HandelNameChange} /><br/>
            {/* <input  type="text" placeholder="Pincode/Zipcode/Postal Code" name="Pincode" value={name.Pincode} onChange={HandelNameChange}/><br/> */}
            <input  type="text" id="state" placeholder="Expiry" name="expiry" value={name.expiry} onChange={HandelNameChange} />
            <input  type="text" id="state" placeholder="CVV"  name="cvv" value={name.cvv} onChange={HandelNameChange}/><br/>
           
            <button id="savebtn" onClick={()=>{setsaved(true)}} >SAVE CARD</button>
            {/* <button id="savebtn" onClick={()=>setName("")}>CANCEL</button> */}
   

          </div>

          {saved &&<div className="saved-address">
              <p> <b>Card Number &nbsp;:&nbsp;</b>{name.cardno}</p>
              <p> <b>Name&nbsp;:&nbsp;</b>{name.name}</p>
              <p> <b>Exp&nbsp;:&nbsp;</b>{name.expiry} </p>
              <p> <b>Cvv&nbsp;:&nbsp;</b>{name.cvv} </p>
          </div>}

          </div>
        </>
    )
}

export default ProfilePayment