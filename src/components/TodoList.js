import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectTodosByVisibility } from "../redux/selectors";
import { Todo } from "./Todo";

const TodoList = ({filter = "ALL"}) => {
    const todos = useSelector(store => selectTodosByVisibility(store, filter))
    return (
        <View>
            {!!todos?.length && todos.map((todo) => <Todo todo={todo} />)}
        </View>
    )
}

export { TodoList }