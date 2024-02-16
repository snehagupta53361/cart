import { configureStore } from "@reduxjs/toolkit";
import createReducerCart from "./reducer";

const store = configureStore({
    reducer: {
        createReducerCart
    },
})

export default store;