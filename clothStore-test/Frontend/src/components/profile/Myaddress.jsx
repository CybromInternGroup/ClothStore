import "./myAddress.css";
import { useState } from "react";


const Address = () =>{
const [saved, setsaved] = useState()
  const [name, setName] = useState({
    name:"",
    mob:""
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
            <h3 id="addheading">My Address</h3>
            <input  type="text" placeholder="Full Name" name="name" value={name.name} onChange={HandelNameChange} /> <br/>
            <input  type="text" placeholder="Mobile Number" name="mob" value={name.mob} onChange={HandelNameChange} /><br/>
            <input  type="text" placeholder="Pincode/Zipcode/Postal Code" name="Pincode" value={name.Pincode} onChange={HandelNameChange}/><br/>
            <input  type="text" id="state" placeholder="City" name="City" value={name.City} onChange={HandelNameChange} />
            <input  type="text" id="state" placeholder="State"  name="State" value={name.State} onChange={HandelNameChange}/><br/>
            <input  type="text" placeholder="Flat no/ Building,street name" name="Flatno" value={name.Flatno} onChange={HandelNameChange}/><br/>
            <input  type="text" placeholder="Area/locality" name="Area" value={name.Area} onChange={HandelNameChange}/><br/>
            <input  type="text" placeholder="Landmark(optional)" name="Landmark" value={name.Landmark} onChange={HandelNameChange}/><br/>

            <button id="savebtn" onClick={()=>{setsaved(true)}} >SAVE ADDRESS</button>
            {/* <button id="savebtn" onClick={()=>setName("")}>CANCEL</button> */}
   

          </div>

          {saved &&<div className="saved-address">
              <p> <b>Name &nbsp;:&nbsp;</b>{name.name}</p>
              <p> <b>Mobile&nbsp;:&nbsp;</b>{name.mob}</p>
              <p> <b>Address&nbsp;:&nbsp;</b>{name.Flatno} {name.Area} {name.Landmark} {name.city} {name.State} {name.Pincode}</p>
          </div>}

          </div>
        </>
    )
}

export default Address