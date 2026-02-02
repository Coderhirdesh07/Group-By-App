import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItem(){},
        increaseQuantity(){},
        decreaseQuantity(){},
        calculatePrice(){},
        deleteItem(){}
    }
});
export const {addItem,increaseQuantity,decreaseQuantity,calculatePrice,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;