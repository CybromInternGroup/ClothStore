import Header from "./components/layout/Header";
import { Route, Routes, Link, Router, } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/Products";
import Blogs from "./components/pages/Blogs";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Tester from "./components/pages/Tester";
import Forgotpassword from "./components/password/Forgotpassword";
import Cart from "./components/pages/cart/Cart";
import Ordersummery from "./components/pages/ordersummery/Ordersummery";



const App = () => {



  return <>


    <Routes>

      <Route path="/" element={<Header />}>
        <Route path={"/"} element={<Home />} />

        <Route path={"/home"} element={<Home />} />
        <Route path={"/Products"} element={<Products />} />
        <Route path={"/Blogs"} element={<Blogs />} />
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/ordersummery"} element={<Ordersummery/>}/>

      </Route>

      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup/>} />
      <Route path={"/testing"} element={<Tester/>} />
      <Route path = {"/forgotpassword"} element={<Forgotpassword/>} />

    </Routes>



  </>





}

export default App;