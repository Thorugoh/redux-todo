import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
// import { toggleTodo } from "../redux/actions";
import { toggleTodo } from "../rtk/reducers/todos";

const Todo =({todo}) => {
    const dispatch = useDispatch();

    function handleToggle(){
        dispatch(toggleTodo(todo.id));
    }

    return(
    <View key={todo.id}>
        <Text onPress={handleToggle} style={{fontSize: 20, fontWeight: "bold", marginBottom: 12}}>
            {todo && todo.completed ? "👌" : "👋"}{" "} 
            <Text style={{textDecorationLine: todo.completed ? "line-through" : undefined}}>{todo.content}</Text>
        </Text>
    </View>
)}

export { Todo };