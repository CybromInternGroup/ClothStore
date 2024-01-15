import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"
import userReducer from "../slices/userSlice"
import orderReducer from "../slices/orderSlice"
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
user:userReducer,
cart:cartReducer,
order:orderReducer

})


export const store = configureStore({
    
    reducer:rootReducer
})