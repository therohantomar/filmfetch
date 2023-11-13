import { configureStore } from "@reduxjs/toolkit";
import filmSearchSlice from "./filmSearchSlice";
import AuthenticationSlice from "./authenticationSlice";
import resetSlice from "./resetSlice";
import logoutSlice from "./logoutSlice";

const store=configureStore({
    reducer:{
        filmSearch:filmSearchSlice,
        authentication:AuthenticationSlice,
        reset:resetSlice,
        logout:logoutSlice

    }
})


export default store
export type RootState=ReturnType <typeof store.getState>
export type  AppDispatch=typeof store.dispatch