import React from "react";
import { Platform } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from "../screens/dashboard";
import { Register } from "../screens/register";
import { Resume } from "../screens/resume";

export function Routes() {
    const theme = useTheme();

    return (
        <Navigator initialRouteName="Resumo"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secundary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 60,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0
            }
        }}>
            <Screen
                options={{
                    tabBarIcon: (({ size, color }) => <MaterialIcons name="format-list-bulleted" size={size} color={color} />)
                }}
                name="Listagem" component={Dashboard}
            />

            <Screen
                options={{
                    tabBarIcon: (({ size, color }) => <MaterialIcons name="attach-money" size={size} color={color} />)
                }}
                name="Cadastrar" component={Register}
            />

            <Screen
                options={{
                    tabBarIcon: (({ size, color }) => <MaterialIcons name="pie-chart" size={size} color={color} />)
                }}
                name="Resumo" component={Resume} />
        </Navigator>
    );
}