import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        ids: [],
        entities: {},
    },
    reducers: {
        addTodo: (state, action) => {
            const id = ++nextTodoId;
            state.ids.push(id);
            state.entities[id] = {id, content: action.payload, completed: false}
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            state.entities[id].completed = !state.entities[id].completed
        }
    }
});

export { todoSlice };
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;