import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import cartSlice from "../slices/cartslice";

const store = configureStore({
    reducer:{
        authSlice,
        cartSlice
    },
});

export default store;