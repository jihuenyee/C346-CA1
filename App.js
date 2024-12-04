import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import EditScreen from './src/screens/EditScreen';
import StatusScreen from './src/screens/StatusScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add Task" component={AddScreen} />
                <Stack.Screen name="Edit Task" component={EditScreen} />
                <Stack.Screen name="Status Summary" component={StatusScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
