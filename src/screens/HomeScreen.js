import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Homework', completed: false },
        { id: '2', title: 'Wash dishes', completed: true },
    ]);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleCompletion = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const editTask = (task) => {
        navigation.navigate('Edit Task', { task, setTasks });
    };

    const completedCount = tasks.filter((task) => task.completed).length;
    const totalCount = tasks.length;

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItemContainer}>
                        <TouchableOpacity
                            style={[styles.taskItem, item.completed && styles.completedTask]}
                            onPress={() => toggleCompletion(item.id)}
                        >
                            <Text style={styles.taskText}>{item.title}</Text>
                        </TouchableOpacity>
                        <Button title="Edit" onPress={() => editTask(item)} />
                    </View>
                )}
            />
            <Button title="Add Task" onPress={() => navigation.navigate('Add Task', { setTasks })} />
            <Button title="View Summary" onPress={() => setModalVisible(true)} />

            {/* Modal for Status Summary */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Completed Tasks: {completedCount}</Text>
                        <Text style={styles.modalText}>Incomplete Tasks: {totalCount - completedCount}</Text>
                        <Text style={styles.modalText}>Total Tasks: {totalCount}</Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    taskItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskItem: { flex: 1, padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
    completedTask: { backgroundColor: '#d4edda' },
    taskText: { fontSize: 16 },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
});
