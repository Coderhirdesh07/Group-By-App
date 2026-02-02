import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login(){},
        logout(){},
        register(){},
    }

});

export const {login,logout,register} = authSlice.actions;
export default authSlice.reducer;