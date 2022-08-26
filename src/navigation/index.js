import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useColorScheme} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {DarkTheme, LightTheme} from "../constants";
import {WeatherCityStack} from "./weatherCityStack";
import {CitySvg, DailySvg, HourlySvg} from "../components/icons/CitySvg";
import {DailyScreen} from "../screens/DailyScreen/DailyScreen";
import {HourlyScreen} from "../screens/HourlyScreen/HourlyScreen";
import React from "react";

const Tab = createBottomTabNavigator();

export function MyTabs() {
    const scheme = useColorScheme()
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <Tab.Navigator
                screenOptions={{tabBarActiveTintColor: scheme === 'dark' ? DarkTheme.colors.primary : LightTheme.colors.primary}}>
                <Tab.Screen
                    name="Cityy"
                    component={WeatherCityStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'City',
                        tabBarIcon: ({color, size}) => (<CitySvg color={color} size={size}/>)
                    }}
                />
                <Tab.Screen
                    name="Daily"
                    component={DailyScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Daily',
                        tabBarIcon: ({color, size}) => (<DailySvg color={color} size={size}/>)
                    }}
                />
                <Tab.Screen
                    name="Hourly"
                    component={HourlyScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Hourly',
                        tabBarIcon: ({color, size}) => (<HourlySvg color={color} size={size}/>)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
