import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.length > 0) {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random().toString(), value: task },
      ]);
    }
  };

  const removeTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <View style={styles.screen}>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={removeTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
});
