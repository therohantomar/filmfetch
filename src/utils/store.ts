import { configureStore } from "@reduxjs/toolkit";
import filmSearchSlice from "./filmSearchSlice";
import AuthenticationSlice from "./authenticationSlice";

const store=configureStore({
    reducer:{
        filmSearch:filmSearchSlice,
        authentication:AuthenticationSlice

    }
})


export default store
export type RootState=ReturnType <typeof store.getState>
export type  AppDispatch=typeof store.dispatch