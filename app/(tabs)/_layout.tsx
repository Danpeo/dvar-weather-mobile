import React from 'react';

import {useColorScheme} from '@/hooks/useColorScheme';
import HomeScreen from "@/app/(tabs)/index";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="index"
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
        </Stack.Navigator>
    );
}
