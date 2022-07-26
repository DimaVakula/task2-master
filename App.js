import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {CitySvg} from "./components/icons/CitySvg";
import {HourlySvg} from "./components/icons/HourlySvg";
import {DailySvg} from "./components/icons/DailySvg";
import WeatherScreen from "./components/screens/WeatherScreen";
import HourlyScreen from "./components/screens/HourlyScreen";
import DailyScreen from "./components/screens/DailyScreen";
import {useColorScheme} from "react-native";
import {DarkTheme, LightTheme} from "./constants";


const Tab = createBottomTabNavigator();

function MyTabs() {
    const scheme = useColorScheme()

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
            <Tab.Navigator
                initialRouteName={'City'}
                screenOptions={{tabBarActiveTintColor: scheme === 'dark' ? DarkTheme.colors.primary : LightTheme.colors.primary, animationEnabled: true, swipeEnabled: true,}}
            >
                <Tab.Screen
                    name="City"
                    component={WeatherScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'City',
                        tabBarHideOnKeyboard: true,
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


