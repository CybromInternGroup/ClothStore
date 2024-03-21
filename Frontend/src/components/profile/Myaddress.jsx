import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./myAddress.css";

const Address = () => {
  const [saved, setSaved] = useState(false);
  const [address, setAddress] = useState({
    fullname: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
    area: "",
    landmark: "",
  });
  const [savedAddresses, setSavedAddresses] = useState([]); // State to store saved addresses data as an array

  const handleAddressSave = async () => {
    try {
      const url = "http://localhost:5000/addaddress";
      await axios.post(url, address);
      setSaved(true);
    } catch (error) {
      console.error("Error saving address:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("useEffect triggered"); // Log to check if useEffect is triggered
  
    const fetchSavedAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getaddress");
        console.log("Fetched addresses:", response.data); // Log fetched data
        setSavedAddresses(response.data);
      } catch (error) {
        console.error("Error fetching saved addresses:", error);
        // Handle error (e.g., show error message to the user)
      }
    };
  
    if (saved) {
      fetchSavedAddresses();
    }
  }, [saved]); // useEffect dependency
  


  return (
    <div className="address-container">
      <div className="addcontainer">
        <h3 id="addheading">My Address</h3>
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={address.fullname}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          value={address.mobile}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Pincode/Zipcode/Postal Code"
          name="pincode"
          value={address.pincode}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={address.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={address.state}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Area/locality"
          name="area"
          value={address.area}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Landmark(optional)"
          name="landmark"
          value={address.landmark}
          onChange={handleInputChange}
        />
        <br />

        <button id="savebtn" onClick={handleAddressSave}>
          SAVE ADDRESS
        </button>
      </div>

     {savedAddresses.length > 0 ? (
        <div className="saved-address">
          <h3>Saved Addresses</h3>
          {savedAddresses.map((savedAddress) => (
            <div key={savedAddress._id} className="address-item">
              <p><b>Name:</b> {savedAddress.fullname}</p>
              <p><b>Mobile:</b> {savedAddress.mobile}</p>
              <p><b>Address:</b> {`${savedAddress.city}, ${savedAddress.state}, ${savedAddress.pincode}`}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved addresses found.</p>
      )}
    </div>
  );
};

export default Address;
