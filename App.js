import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import СitySvg from "./components/icons/CitySvg";
import WeatherScreen from "./components/screens/WeatherScreen";
import HourlyScreen from "./components/screens/HourlyScreen";
import DailyScreen from "./components/screens/DailyScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                style={{position:"absolute",}}
                name="City"
                component={WeatherScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'City',
                    tabBarIcon: ({ color}) => (<СitySvg color={color}/>)
                }}
            />
            <Tab.Screen
                name="Daily"
                component={DailyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Daily',
                }}
            />
            <Tab.Screen
                name="Hourly"
                component={HourlyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Hourly',
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}


