import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (initialState, action) => {
            initialState.username = action.payload
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

        setTimeout(() => {
            dispatch(setUsername(response.data[0].username))
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
            dispatch(setUsername(response.data.username))
        }
        
    } catch (error) {
        
    }
}

export const {setUsername} = userSlice.actions

export default userSlice.reducer;