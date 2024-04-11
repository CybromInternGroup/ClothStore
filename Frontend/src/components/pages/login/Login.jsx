import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { UseDispatch, useDispatch } from "react-redux";
import { normalLogin, googleLogin, setUser } from "../../../slices/userSlice";
import { useEffect } from "react";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";

const Login = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setmessage] = useState();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //google login authentication  starts from here --------------
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      console.log(user);

      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(res.data);
          dispatch(googleLogin(res.data));

          navigate("/home");
          console.log(profile);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  //google login authentication endss here--------------

  const handlechange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkAuth = async () => {
    // Check if the user is an admin
    if (userData.email === "admin@gmail.com" && userData.password === "admin123") {
      // Redirect to admin dashboard or perform admin-related actions
      navigate("/admin/dashboard");
    } else {
      // Perform regular user login authentication
      axios.post("http://localhost:5000/user/auth", userData).then((data) => {
        if (data.statusText === "OK") {
          if (data.data.login) {
            // If user is logged in, redirect to the home page
            dispatch(normalLogin(data.data));
            navigate("/");
          } else {
            // Show error message if login fails
            if (data.data.message.length > 0) {
              setmessage(data.data.message);
            }
          }
        } else {
          // Show alert if something went wrong with the request
          alert("Something went wrong");
        }
      });
    }
  };

  if (isLogin) {
    navigate("/");
  }

  //

  return (
    <>
      <div className="form-container">
        <img
          className="img"
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
          alt="Left Image"
        />

        <div className="form-content">
          <h1 className="loginheading">Log In </h1>
          <br />
          <br />
          <p className="logtrendtext" style={{ color: "#a0a0a0" }}>
            For Latest Trend Exciting offers
          </p>
          <br />
          <div class="searchformfld">
            <input
              className="num"
              name="email"
              type="text"
              id="candidateName"
              onChange={handlechange}
              placeholder=" "
            />
            <label for="candidateName">Enter your email</label>
          </div>
          <br />
          <br />
          <div class="searchformfld2">
            <input
              className="num"
              name="password"
              type="password"
              id="candidateName2"
              onChange={handlechange}
              placeholder=" "
            />
            <label for="candidateName2">Enter your password</label>
          </div>
          <br /> <br />
          <button className="loginbtn" onClick={checkAuth}>
            Continue
          </button>
          <br />
          <br />
          <p className="logdonttext" style={{ marginLeft: "90px" }}>
            Don't have account ?{" "}
            <button
              className="submitbtn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>{" "}
          </p>
          <br />
          <p className="or">
            _______________&nbsp;&nbsp;
            <i
              style={{ color: "grey", position: "absolute", marginTop: "3px" }}
            >
              OR
            </i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______________
          </p>
          <br />
          <br />
          <button className="email" onClick={() => login()}>
            <FcGoogle
              className="googleicon"
              style={{
                position: "absolute",
                marginLeft: "-30px",
                marginTop: "4px",
              }}
            />
            Countinue with Google{" "}
          </button>
          <br />
          <br />
          <div className="social-buttons">
            {/* <br /><br />
                        &nbsp; &nbsp;  &nbsp;  &nbsp;
                        <button className="btn"><FaFacebook /> Facebook</button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
