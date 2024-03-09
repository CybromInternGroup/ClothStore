import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
};

const cartSlice = createSlice({

name:"cart",
initialState,
reducers:{
    addtocart: (state, action) => {
        const { id, size } = action.payload;
        const existingCartItemIndex = state.cart.findIndex(item => item.id === id && item.size.label === size.label);
        
        if (existingCartItemIndex !== -1) {
          // If a product with the same ID and size label already exists, increment its quantity
          state.cart[existingCartItemIndex].quantity += 1;
        } else {
          // If the product is not in the cart, add it as a new item
          state.cart.push(action.payload);
        }
      },

    removeProductFromCart(state, action) {
        const productIdToRemove = action.payload; // Product ID to remove
        state.cart = state.cart.filter(product => product.id !== productIdToRemove);
      },
     
      clearCart: (state) => {
        state.cart = [];
      },

     
    }

})


export const { addtocart ,removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer