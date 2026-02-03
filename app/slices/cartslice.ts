import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product{
    productId:string;
    productName:string;
    productPrice:number;
    productQuantity:number;
}
interface ProductState{
    product:Product[],
    totalPrice:number;
}

const initialState:ProductState = {
    product:[],
    totalPrice:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItem(state,action:PayloadAction<Product>){
            const existingItem = state.product.find(
                item => item.productId===action.payload.productId
            );
            if(existingItem){
                existingItem.productQuantity+=1;
            }
            else state.product.push(action.payload);
        },
        increaseQuantity(state,action:PayloadAction<Product>){
             
        },
        decreaseQuantity(state,action:PayloadAction<Product>){

        },
        calculatePrice(state,action:PayloadAction<Product>){
            let cartSize = state.product.length;
            if(cartSize === 0) state.totalPrice = 0; 
            else{
                for(let i=0;i<cartSize;i++){
                    state.totalPrice +=(action.payload.productPrice * action.payload.productQuantity);
                }
            }
        },
        deleteItem(state,action){}
    }
});
export const {addItem,increaseQuantity,decreaseQuantity,calculatePrice,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;