import { createSlice } from "@reduxjs/toolkit";


const logoutSlice=createSlice({
    name:"logout",
    initialState:{
        isLogoutOpen:false
    },
    reducers:{
        toggleLogout:(state)=>{
            state.isLogoutOpen=!state.isLogoutOpen
        }
    }
})

export const {toggleLogout} =logoutSlice.actions
export default logoutSlice.reducer