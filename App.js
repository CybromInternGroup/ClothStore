import Header from "./components/layout/Header";
import { Route, Routes, Link, Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Blogs from "./components/pages/Blogs";



const App = () => {



  return <>


    <Routes>

      <Route path="/" element={<Header />}>

        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Products"} element={<Products />} />
        <Route path={"/Blogs"} element={<Blogs />} />

      </Route>

    </Routes>



  </>





}

export default App;
