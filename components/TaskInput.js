import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const inputHandler = (text) => {
    setEnteredTask(text);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Digite uma tarefa"
        style={styles.input}
        value={enteredTask}
        onChangeText={inputHandler}
      />
      <Button title="Adicionar" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 5,
  },
});

export default TaskInput;
