import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function ToDoList({ tasks, toggleTask, deleteTask }) {
    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'high':
                return '#e74c3c';
            case 'normal':
                return '#2ecc71';
            case 'low':
                return '#3498db';
            default:
                return '#95a5a6';
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.task}>
            <TouchableOpacity 
                style={styles.taskTextContainer} 
                onPress={() => toggleTask(item.id)}
            >
                <MaterialIcons 
                    name={item.completed ? "check-box" : "check-box-outline-blank"} 
                    size={24} 
                    color="#3498db"
                />
                <View style={styles.taskContent}>
                    <Text style={[
                        styles.taskText,
                        item.completed && styles.completedTask
                    ]}>
                        {item.text}
                    </Text>
                    <View style={[
                        styles.priorityIndicator, 
                        { backgroundColor: getPriorityColor(item.priority) }
                    ]}>
                        <Text style={styles.priorityText}>{item.priority}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => deleteTask(item.id)}
            >
                <MaterialIcons name="delete" size={24} color="#e74c3c" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Tasks</Text>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2c3e50',
    },
    list: {
        flex: 1,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    taskTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskContent: {
        flex: 1,
        marginLeft: 10,
    },
    taskText: {
        fontSize: 16,
        color: '#2c3e50',
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#95a5a6',
    },
    priorityIndicator: {
        marginTop: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    priorityText: {
        color: '#fff',
        fontSize: 12,
        textTransform: 'capitalize',
    },
    deleteButton: {
        padding: 5,
    }
});

export default ToDoList;
