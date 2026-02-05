import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import cartSlice from "../slices/cartslice";

export const store = configureStore({
    reducer:{
        authSlice,
        cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch