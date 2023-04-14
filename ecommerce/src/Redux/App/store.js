import { configureStore } from "@reduxjs/toolkit";

import userReducer from './../Features/userSlice';
import transactionReducer from './../Features/transactionSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        transaction: transactionReducer
    }
})