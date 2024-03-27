// ProfileInfo.js

import React from 'react';
import './profileInfo.css'; // Import CSS file for styling

const ProfileInfo = () => {
  return (
    <div className="context">
      <h3 id="perhead">Personal Information</h3>
      <p id="perhead">
        Hey there! Fill in your details for a personalized AJIO shopping experience.
      </p>

      <div id="details">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required /> <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="phone">Telephone:</label>
        <input type="tel" id="phone" name="phone" required /><br />

        <div className="horizontal-group gender-options">
          <label id="labelgender">Gender:</label>
          <label id="radio"><input type="radio" name="gender" value="male" /> Male</label>
          <label id="radio"><input type="radio" name="gender" value="female" /> Female</label><br />
        </div>

        <button className="myprofilebtn">Update</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
