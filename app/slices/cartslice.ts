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
    noOfItems:number;
}

const initialState:ProductState = {
    product:[],
    totalPrice:0,
    noOfItems:0
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
        deleteItem(state,action){},
        totalItems(state,action){
            let itemsCount = state.product.length;
            state.noOfItems = itemsCount;
        }
    }
});
export const {addItem,increaseQuantity,decreaseQuantity,totalItems,calculatePrice,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;






// const updateCartSummary = (state: CartState) => {
//   state.totalPrice = state.product.reduce(
//     (total, item) => total + item.productPrice * item.productQuantity,
//     0
//   );

//   state.noOfItems = state.product.reduce(
//     (count, item) => count + item.productQuantity,
//     0
//   );
// };









// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Product {
//   productId: string;
//   productName: string;
//   productPrice: number;
//   productQuantity: number;
// }

// interface CartState {
//   product: Product[];
//   totalPrice: number;
//   noOfItems: number;
// }

// const initialState: CartState = {
//   product: [],
//   totalPrice: 0,
//   noOfItems: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action: PayloadAction<Product>) {
//       const item = state.product.find(
//         p => p.productId === action.payload.productId
//       );

//       if (item) {
//         item.productQuantity += 1;
//       } else {
//         state.product.push(action.payload);
//       }

//       updateCartSummary(state);
//     },

//     increaseQuantity(state, action: PayloadAction<string>) {
//       const item = state.product.find(p => p.productId === action.payload);
//       if (item) {
//         item.productQuantity += 1;
//       }
//       updateCartSummary(state);
//     },

//     decreaseQuantity(state, action: PayloadAction<string>) {
//       const item = state.product.find(p => p.productId === action.payload);
//       if (item && item.productQuantity > 1) {
//         item.productQuantity -= 1;
//       }
//       updateCartSummary(state);
//     },

//     deleteItem(state, action: PayloadAction<string>) {
//       state.product = state.product.filter(
//         p => p.productId !== action.payload
//       );
//       updateCartSummary(state);
//     },
//   },
// });
