import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch } from "react-redux";

const initialState = {
    list: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (initialState, action) => {
            initialState.list.push({todo: action.payload})
        },

        deleteTodo: (initialState, action) => {
            console.log(action.payload)
            initialState.list.splice(action.payload, 1)
        },

        onSaveData: (initialState, action) => {
            initialState.list = action.payload
        }
    }
})

export const getTodoAsync = () => async(dispatch) => {
    try {
        let response = await axios.get('http://localhost:5000/todos')
        dispatch(onSaveData (response.data))
    } catch (error) {
        
    }
}

export const {addTodo, deleteTodo, onSaveData} = todoSlice.actions

export default todoSlice.reducer