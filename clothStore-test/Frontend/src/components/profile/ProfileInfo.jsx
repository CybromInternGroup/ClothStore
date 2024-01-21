import "./profileInfo.css"
const ProfileInfo = ()=>{
    return (
        <> 
       <div className="context">
       <h3 id="perhead"> Personal Information</h3>
         <p id="perhead">
Hey there! Fill in your details for a personalized AJIO shopping experience.</p>


   <div id="details">

   <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" required />  <br/>
   

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required /><br/>

    <label for="password">Telephone:</label>
    <input type="number" id="password" name="password" required /><br/>

    {/* <label for="changePassword">Change Password:</label>
    <input type="password" id="changePassword" name="changePassword" /><br/> */}

    <div class="horizontal-group gender-options">
      <label id="labelgender">Gender:</label>
      <label id="radio"><input type="radio" name="gender" value="male" /> Male</label>
      <label id="radio"><input type="radio" name="gender" value="female" /> Female</label><br/>
    </div>

        <button className="myprofilebtn">Update</button>
   </div>
       </div>
        </>
    )
}

export default ProfileInfo