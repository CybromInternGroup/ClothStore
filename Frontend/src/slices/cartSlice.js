import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    wishlist: [],
};

const cartSlice = createSlice({

name:"cart",
initialState,
reducers:{
    addtocart:(state, action)=>{
        var myitem = state.cart.filter((key)=>key.id==action.payload.id);
        // alert(action.payload.id);
        if(myitem.length>=1)
        {
            alert("Already in a Cart");
        }
        else{
            state.cart.push(action.payload);
            console.log("add to cart : ",action.payload.id);
        }

    },
    removeProductFromCart(state, action) {
        const productIdToRemove = action.payload; // Product ID to remove
        state.cart = state.cart.filter(product => product.id !== productIdToRemove);
      },

      addToWishlist: (state, action) => {
        // Add the product to the wishlist
        state.wishlist.push(action.payload);
      },

      removeFromWishlist: (state, action) => {
        // Remove the product from the wishlist based on the productId
        state.wishlist = state.wishlist.filter(
          (product) => product.id !== action.payload
        );
      },
  }
})


export const { addtocart ,removeProductFromCart,addToWishlist,removeFromWishlist} = cartSlice.actions;
export default cartSlice.reducer