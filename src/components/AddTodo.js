import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
// import { addTodo } from "../redux/actions";
import { addTodo } from "../rtk/reducers/todos";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handleAddTodo(){
        dispatch(addTodo(input));    
    }

    return(
        <View style={{flexDirection: "row", gap: 6, alignItems: "center",}}>
            <TextInput onChangeText={setInput} style={{ borderWidth: 1, paddingHorizontal: 8, borderRadius: 10, borderColor: "black", height: 34, flex: 1, }}  />
            <TouchableOpacity onPress={handleAddTodo} style={{backgroundColor: "#7329F6", padding: 5, borderRadius: 5}}>
                <Text style={{color: "#FFF"}}>Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

export { AddTodo };