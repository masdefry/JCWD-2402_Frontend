import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [{todo: 'Makan'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (initialState, action) => {
            initialState.list.push({todo: action.payload})
        }
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer