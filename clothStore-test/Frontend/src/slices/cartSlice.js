import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart:[{
        itemId:"testid",
        itemName:"testname",
        quantity:10,
        product:{}
    }
        
        
    ],
    name:"hy from cart"
};

const cartSlice = createSlice({

name:"cart",
initialState,
reducers:{

    setCartItem:(state,action)=>{
alert(state.name)
    },
    getCartItem:(state,action)=>{


    }


}


})


export const { setCartItem, getCartItem } = cartSlice.actions;
export default cartSlice.reducer