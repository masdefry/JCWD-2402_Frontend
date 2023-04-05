import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        bebas: counterReducer // { value: 100 }
    }
})