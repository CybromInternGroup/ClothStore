import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"
import userReducer from "../slices/userSlice"
import orderReducer from "../slices/orderSlice"
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user:userReducer,
    cartSlice:cartReducer,
    order:orderReducer
})


export const store = configureStore({
    reducer:rootReducer
})

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../slices/cartSlice";

// const store = configureStore({
//     reducer: {
//         cartSlice:cartReducer
//     }
// });
// export default store;
