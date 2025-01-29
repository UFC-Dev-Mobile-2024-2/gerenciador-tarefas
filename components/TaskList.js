import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskList = (props) => {
  return (
    <View>
      {props.tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          onPress={() => props.onDeleteTask(task.id)}
        >
          <View style={styles.taskItem}>
            <Text>{task.value}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
  },
});

export default TaskList;
