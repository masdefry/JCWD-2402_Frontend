import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from 'axios';
import toast from 'react-hot-toast';
import UrlAPI from './../../Supports/Constants/URLAPI';

const initialState = {
    cart: null,
    totalCart: null
}

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
       setCart: (initialState, action) => {
        console.log(action.payload.totalCart)
        initialState.cart = action.payload.cart 
        initialState.totalCart = action.payload.totalCart
       }
    }
})

export const getCartAsync = () => async(dispatch) => {
    try {
        const id = localStorage.getItem('id')
        const findCart = await axios.get(`${UrlAPI}/carts/?userId=${id}&_expand=type&_expand=product`)
        
        let totalCart = 0
        findCart.data.forEach(value => {
            totalCart += value.quantity
        })
        console.log(findCart)
        dispatch(setCart({cart: findCart.data, totalCart}))
    } catch (error) {
        console.log(error)
    }
}


export const {setCart} = transactionSlice.actions

export default transactionSlice.reducer;