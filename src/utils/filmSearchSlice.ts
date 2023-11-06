import {createSlice} from "@reduxjs/toolkit"

const filmSearchSlice=createSlice({
    name:"filmSearch",
    initialState:{
        text:"",
    },
    reducers:{
        addText(state,actions){
            state.text=actions.payload
        }
    }

})


export const {addText} = filmSearchSlice.actions
export  default filmSearchSlice.reducer

