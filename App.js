import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // Don't allow duplicate tasks
    if (tasks.some(task => task.text === newTask.text)) {
      alert('This task already exists!');
      return;
    }
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? {...task, completed: !task.completed}
        : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ToDoForm addTask={addTask} />
        <View style={styles.listContainer}>
          <ToDoList 
            tasks={tasks} 
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  }
});
