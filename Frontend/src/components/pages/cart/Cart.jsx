import "./cart.css";
import truck from "./truck.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import emptycart from "../cart/emptycart.gif"
import { removeProductFromCart,setTotalPrice,setSubTotalPrice } from "../../../slices/cartSlice";

const Cart = () => {
  const [quantities, setQuantities] = useState({});

  const mycart = useSelector((state) => state.cartSlice.cart);
  
  const dispatch = useDispatch();
 
  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const removeItem = (productId) => {
    dispatch(removeProductFromCart(productId));
    // After removing, update quantities state to remove the quantity of the removed product
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  const allCardProduct = mycart.map((product) => {
    const selectedQuantity = quantities[product.id] || 1;
    const sizeQuantity = product.size ? product.size.quantity : 0; // Ensure size exists before accessing quantity
    return (
    

      
      <div key={product.id} id="cart-dom-clear">
        <div id="cart-push-prdt">
          <div id="cart-descr-img">
            <div id="cart-descr">
              <p style={{ fontSize: "22px" }}>{product.name}</p>
              <p id="actual_price" style={{ fontSize: "20px" }}>
                ₹{product.price}{" "}
                <span id="mrp-price"></span>
              </p>
              <div>
                <p className="green-color">
                  You saved ₹{product.regularPrice - product.price}!
                </p>
                <p style={{color : sizeQuantity > 3 ? 'green' : 'red'}}>
                  {sizeQuantity < 3 ? `Hurry! Only ${sizeQuantity} Left!` : 'In stock'}
                </p>
              </div>
             Size : <span style={{marginRight:"20px"}}>{product.size.label}</span>  Qty : 
                  
              <div id="size-qty">
                <div id="qty">
                  <select
                    value={selectedQuantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  >
                    {/* Map over available quantities */}
                    {Array.from(
                      { length: sizeQuantity }, // Use sizeQuantity as the length
                      (_, i) => i + 1
                    ).map((qty) => (
                      <option key={qty}>{qty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div id="cart-img">
              <img src={product.images[0]} alt={product.name} />
            </div>
          </div>
          <hr />
          <div id="remove-wishlist">
            <div onClick={() => removeItem(product.id)} style={{ cursor: "pointer" }}>Remove</div>
            <div>Add to Wishlist</div>
          </div>
        </div>
      </div>
    );
  });

  const navigate = useNavigate();
  const gotoordersummery = () => {
    navigate("/ordersummery");
  };

  const totalPrice = mycart.reduce((total, product) => {
    const selectedQuantity = quantities[product.id] || 1;
    return (total + product.regularPrice * selectedQuantity);
  }, 0);


  const SubTotalPrice = mycart.reduce(
    (total, product) =>
      total + (quantities[product.id] || 1) * product.price,
    0
  );

  
  dispatch(setTotalPrice(totalPrice));
  dispatch(setSubTotalPrice(SubTotalPrice));



  return (
    <>

       {mycart.length === 0 ? (
        <div id="empty-cart-container">
          <img src={emptycart} alt="Empty Cart" />
          {/* <p>Your cart is empty!</p> */}
        </div>
        ) : (
      <div id="cartpage-total-div">
        <p id="total-items-cart">My Bag {mycart.length} item(s)</p>
        <div id="cart-append-change">
          <div id="cart-shown-images">
            <div id="cart-shown-left">
              <div className="offer-div" id="left-offer-color">
                <p>
                  <span>
                    <img
                      className="truckmove"
                      src={truck}
                      alt="truck"
                      style={{
                        width: "30px",
                        height: "20px",
                        animationDuration: "2s",
                      }}
                    />
                  </span>
                  Yay! You get FREE delivery on this order
                </p>
              </div>
              {allCardProduct}
            </div>
            <div id="cart-shown-right">
              <div className="offer-div" id="offer-div">
                <p>Save extra ₹52 with TriBe</p>
              </div>
              <div id="border-grey">
                <div className="referal-redeem">
                  <div>
                    <div id="Coupon-btn">
                      Apply Coupon / Girt Card &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Redeem{" "}
                    </div>
                  </div>
                </div>
                <div id="cont-price-summ" className="offer-div">
                  PRICE SUMMARY
                </div>
                <div id="price-summary">
                  <div>
                    <p>Total MRP (Incl. of taxes)</p>
                    <p>Delivery Fee </p>
                    <p  style={{ color: " rgb(5, 227, 57)" }}>Discount </p>
                    <p>Subtotal </p>
                  </div>
                  <div>
                    <p className="total_calculate_price">₹{totalPrice}</p>
                    <p style={{ color: " rgb(5, 227, 57)" }}>FREE</p>
                    <p className="Subtotal" style={{ color: " rgb(5, 227, 57)" }}>₹{totalPrice-SubTotalPrice}</p>
                    <p className="Subtotal">₹{SubTotalPrice}</p>
                  </div>
                </div>
                <div
                  className="offer-div"
                  id="saving-div"
                >{`You are saving ₹${totalPrice - SubTotalPrice} on this order`}</div>
                <div id="Total-amount-address">
                  <div>
                    <p style={{ fontSize: "20px" }}>Total : ₹ {SubTotalPrice}</p>
                  </div>
                  <div>
                    <button
                      onClick={gotoordersummery}
                      id="adress-payment-btn"
                    >
                      Proceed to Shipping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="payment_secure">
            <img src="https://images.bewakoof.com/web/secure-payments-image.png" />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Cart;
