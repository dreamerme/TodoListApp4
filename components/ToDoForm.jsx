import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');
    const [priority, setPriority] = useState('normal');

    const handleAddTask = () => {
        if (taskText.trim().length > 0) {
            addTask({
                text: taskText,
                priority: priority,
                completed: false,
                id: Date.now()
            });
            setTaskText(''); // Clear input after adding
        }
    };

    return (
        <View style={styles.form}>
            <Text style={styles.label}>New Task</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <View style={styles.priorityContainer}>
                <Text style={styles.label}>Priority:</Text>
                <Picker
                    selectedValue={priority}
                    style={styles.picker}
                    onValueChange={(itemValue) => setPriority(itemValue)}
                >
                    <Picker.Item label="High" value="high" />
                    <Picker.Item label="Normal" value="normal" />
                    <Picker.Item label="Low" value="low" />
                </Picker>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleAddTask}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2c3e50',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#f8f9fa',
    },
    priorityContainer: {
        marginTop: 10,
    },
    picker: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ToDoForm;
