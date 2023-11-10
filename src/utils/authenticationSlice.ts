import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice=createSlice({
    name:"authentication",
    initialState:{
        isOpen:false
    },
    reducers:{
        toggleAuthentication:(state)=>{
            state.isOpen=!state.isOpen
        }
    }
})

export const {toggleAuthentication}=authenticationSlice.actions
export default authenticationSlice.reducer