import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
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

    }
  }
})


export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer