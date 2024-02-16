import { createSlice } from "@reduxjs/toolkit";

const createReducerCart = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        subtotal : 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action)=>{
            const item = action.payload;
            const isItemExist = state.cartItems.find((i)=>{return i.id===item.id});

            if(isItemExist){
                state.cartItems.forEach((i)=>{
                    if(i.id===item.id){
                        i.quantity += 1;
                    }
                })
            }
            else{
                state.cartItems.push(item);
            }
        },
        decrements: (state, action)=>{
            const item = state.cartItems.find((i)=>{return i.id===action.payload});

            if(item.quantity > 1){
                state.cartItems.forEach((i)=>{ 
                    if(i.id === item.id) i.quantity -= 1;
                })
            }
        },
        deleteFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter((i)=> i.id !== action.payload);
        },

        calculatePrice : (state)=>{
            let sum = 0;

            state.cartItems.forEach((i)=>{
                sum += i.price * i.quantity;
            })

            state.subtotal = sum;
            state.shipping = sum < 1000 ? 0: 250;
            state.tax = +(state.subtotal* 0.18).toFixed();  //will return string if not used plus
            state.total = state.subtotal + state.shipping + state.tax;
        }
    },

})

export const {addToCart, decrements, deleteFromCart, calculatePrice } = createReducerCart.actions;

export default createReducerCart.reducer;