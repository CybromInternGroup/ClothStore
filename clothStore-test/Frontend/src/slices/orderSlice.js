import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = [];

const orderSlice = createSlice({

name:"order",
initialState,
reducers:{

    setOrder:(state,action)=>{
alert(state.name)
    },
    getOrder:(state,action)=>{


    }


}


})


export const { setOrder, getOrder } = orderSlice.actions;
export default orderSlice.reducer