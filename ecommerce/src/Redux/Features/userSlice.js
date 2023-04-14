import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from 'axios';
import toast from 'react-hot-toast';
import { getCartAsync } from "./transactionSlice";

const initialState = {
    id: null,
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (initialState, action) => {
            initialState.id = action.payload.id
            initialState.username = action.payload.username
        }
    }
})

export const loginAsync = (_usernameOrEmail, _password) => async(dispatch) => {
    try {
        if(_usernameOrEmail.includes('@')){
            var response = await axios.get(`http://localhost:5000/users?email=${_usernameOrEmail}&password=${_password}`)
        }else{
            var response = await axios.get(`http://localhost:5000/users?username=${_usernameOrEmail}&password=${_password}`)
        }

        if(response.data.length === 0) throw {message: 'Account Not Found!'}
        
        toast.success('Login Success!')
        
        localStorage.setItem('id', response.data[0].id)
        
        dispatch(getCartAsync())

        setTimeout(() => {
            dispatch(setUsername(response.data[0]))
        }, 3000)
    } catch (error) {
        toast.error(error.message)
    }
}

export const keepLoginAsync = () => async(dispatch) => {
    try {
        let id = localStorage.getItem('id')

        if(id){
            let response = await axios.get(`http://localhost:5000/users/${id}`)
            dispatch(setUsername(response.data))
        }
        
    } catch (error) {
        
    }
}

export const logoutAsync = () => async(dispatch) => {
    try {
        let id = localStorage.removeItem('id')
        dispatch(setUsername({id: null, username: ''}))
        
    } catch (error) {
        
    }
}

export const {setUsername} = userSlice.actions

export default userSlice.reducer;