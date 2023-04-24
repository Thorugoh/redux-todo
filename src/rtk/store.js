import { configureStore } from "@reduxjs/toolkit";
import todo from "./reducers/todos";

export default configureStore({
    reducer: {
        todos: todo
    }
});
