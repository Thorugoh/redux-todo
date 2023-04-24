import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { AddTodo } from './src/components/AddTodo';
import { TodoList } from './src/components/TodoList';
// import store from  "./src/redux/store";
import store from "./src/rtk/store";

export default function App() {
  const [filter, setFilter] = useState("ALL");
  
  function filterAll(){
    setFilter("ALL");
  }

  function filterCompleted(){
    setFilter("COMPLETED");
  }

  function filterIncomplete(){
    setFilter("INCOMPLETE");
  }

  const filters = [
    {
      text: "all",
      onPress: filterAll,
      isSelected: filter === "ALL"
    },
    {
      text: "completed",
      onPress: filterCompleted,
      isSelected: filter === "COMPLETED"
    },
    { 
      text: "incomplete",
      onPress: filterIncomplete,
      isSelected: filter === "INCOMPLETE"
    }
  ]

  return (
    <Provider store={store}>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Todo List</Text>
      <View style={{marginLeft: 20, flexDirection: "row", gap: 10, alignSelf: "flex-start", marginBottom: 16, marginTop: 8}}>
        {filters.map(({text, onPress, isSelected})=> <Text style={{fontSize: 18, textDecorationLine: isSelected ? "underline" : undefined, fontWeight: "bold", color: "#7329F6"}} onPress={onPress}>{text}</Text>)}  
      </View>

      <TodoList filter={filter} />
      </View>
      <AddTodo />
    </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    gap: 6,
    backgroundColor: '#fff',
  },
});
