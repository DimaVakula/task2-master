import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {CitySvg, HourlySvg, DailySvg} from "./components/icons/CitySvg";
import WeatherScreen from "./components/screens/WeatherScreen/WeatherScreen";
import HourlyScreen from "./components/screens/HourlyScreen/HourlyScreen";
import DailyScreen from "./components/screens/DailyScreen/DailyScreen";
import {useColorScheme} from "react-native";
import {DarkTheme, LightTheme} from "./constants";


const Tab = createBottomTabNavigator();

function MyTabs() {
    const scheme = useColorScheme()

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <Tab.Navigator
                screenOptions={{tabBarActiveTintColor: scheme === 'dark' ? DarkTheme.colors.primary : LightTheme.colors.primary}}>
                <Tab.Screen
                    name="City"
                    component={WeatherScreen}
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

export default function App() {

    return (
        <MyTabs/>
    )
}


