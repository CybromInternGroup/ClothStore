import React from "react";
import "../product/product.css";
import "./wishlist.css";
import {useNavigate,useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { removeFromWishlist } from "../../../slices/cartSlice"; // Import the action for removing from the wishlist

const Wishlist = () => {
  // Assuming you have a wishlistSlice in your Redux store
  const wishlist = useSelector((state) => state.cartSlice.wishlist);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleRemoveFromWishlist = (productId) => {
    // Dispatch an action to remove the product from the wishlist
    dispatch(removeFromWishlist(productId));
  };

  const AllProductData=((id,name , description,category,price,regularPrice,images,size)=>{
    // dispatch(addtocart ({id:id ,name:name ,description:description,category:category,price:price,regularPrice:regularPrice,images:images,size:size} ))
    console.log("Data is comming");
    console.log({name});
})

const gotoshowproduct = (id, name, description, category, price, regularPrice, images, size) => {
    const productData = { id, name, description, category, price, regularPrice, images, size };
    AllProductData(productData);
    navigate('/showproduct', { state: productData });
}

  return (
    <>
      <div id="wishlist-container">
        <h2>My Wishlist</h2>
        <div className="product_item_box">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <div className="ProductDiv" key={product.id}>
                {/* Similar structure as the product display */}
                <div className="circleicon">
                <CiCircleRemove
                    className="facircle"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  />
                </div>
                <img onClick={()=>gotoshowproduct(product._id,product.name , product.description,product.category,product.price,product.regularPrice,product.images,product.size)} src={product.images[1]} alt=""/>
                {/* Display product information */}
                <div className="prodetail">
                  <p style={{ fontSize: "25px", marginTop: "10px" }}>
                    {product.name}
                  </p>
                  <p className="prodescription">{product.description}</p>
                  <p style={{ fontSize: "22px" }}>
                    Rs. {product.price}{" "}
                    <span
                      style={{
                        fontSize: "14px",
                        textDecoration: "line-through",
                        color: "red",
                      }}
                    >
                      Rs. {product.regularPrice}
                    </span>
                  </p>
                  <button className="procartbutton" disabled>
                    Already in Wishlist
                  </button>
                </div>
                <br />
              </div>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;