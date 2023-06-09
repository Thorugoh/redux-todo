
let nextTodoId = 0;

export const addTodo = content => ({
    type: "ADD_TODO",
    payload: {
        id: ++nextTodoId,
        content,
    }
})

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    payload: { id }
});
