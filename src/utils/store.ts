import { configureStore } from "@reduxjs/toolkit";
import filmSearchSlice from "./filmSearchSlice";

const store=configureStore({
    reducer:{
        filmSearch:filmSearchSlice

    }
})


export default store
export type RootState=ReturnType <typeof store.getState>
export type  AppDispatch=typeof store.dispatch