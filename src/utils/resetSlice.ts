import { createSlice } from "@reduxjs/toolkit";


const resetSlice=createSlice({
    name:"reset",
    initialState:{
        isResetOpen:false
    },
    reducers:{
        toggleReset:(state)=>{
            state.isResetOpen=!state.isResetOpen
        }
    }
})

export const {toggleReset}=resetSlice.actions
export default resetSlice.reducer