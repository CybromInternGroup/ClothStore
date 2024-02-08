import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";









const initialState = {
   
        id:"",
        name:"",
        email:"",
        isLogin:false,
        

};

const userSlice = createSlice({

name:"user",
initialState,
reducers:{

    normalLogin:(state,action)=>{

        state.id = action.payload.userData._id     
        state.name= action.payload.userData.name
        state.email= action.payload.userData.email
        state.isLogin=true
       
        
    },
    googleLogin(state,action){

        state.id = action.payload.id     
        state.name= action.payload.name
        state.email= action.payload.email
        state.isLogin=true

    },
    setUser:(state,action)=>{


    },
    userLogout:(state,action)=>{
      
state.id = ""
state.email = ""
state.name = ""
state.isLogin = false


    }


}


})


export const { normalLogin,googleLogin,setUser , userLogout} = userSlice.actions;
export default userSlice.reducer