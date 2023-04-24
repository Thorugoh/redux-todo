export const selectTodosId = store => {
    return store.todos?.ids || [];
};

export const selectTodoById = (store, id) => {
    return store.todos?.entities[id] || {}
}

export const selectAllTodos = (store) => {
    return selectTodosId(store).map(id => selectTodoById(store, id));
}

export const selectTodosByVisibility = (store, visibilityFilter) => {
    const allTodos = selectAllTodos(store);
    switch (visibilityFilter) {
        case "COMPLETED":
            return allTodos.filter((todo) => todo.completed);
        case "INCOMPLETE": 
            return allTodos.filter((todo) => !todo.completed);
        case "ALL":
        default:
            return allTodos;
    }
}