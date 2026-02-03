import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login(state,action){
            
        },
        logout(state,action){},
    }

});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;