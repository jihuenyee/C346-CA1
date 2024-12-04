import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function EditScreen({ route, navigation }) {
    const { task, setTasks } = route.params;
    const [title, setTitle] = useState(task.title);

    const saveChanges = () => {
        setTasks((prevTasks) =>
            prevTasks.map((t) => (t.id === task.id ? { ...t, title } : t))
        );
        navigation.goBack();
    };

    const deleteTask = () => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task Title"
                value={title}
                onChangeText={setTitle}
            />
            <Button title="Save Changes" onPress={saveChanges} />
            <Button title="Delete Task" onPress={deleteTask} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, padding: 8 },
});
