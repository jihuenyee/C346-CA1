import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusScreen({ route }) {
    const { tasks } = route.params;

    const completed = tasks.filter((task) => task.completed).length;
    const total = tasks.length;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Completed Tasks: {completed}</Text>
            <Text style={styles.text}>Incomplete Tasks: {total - completed}</Text>
            <Text style={styles.text}>Total Tasks: {total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    text: { fontSize: 18, marginBottom: 8 },
});
