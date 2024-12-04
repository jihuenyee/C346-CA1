import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddScreen({ route, navigation }) {
    const { setTasks } = route.params;
    const [title, setTitle] = useState('');

    const addTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now().toString(), title, completed: false },
        ]);
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
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, padding: 8 },
});
