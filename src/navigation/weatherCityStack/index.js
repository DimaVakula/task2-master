import {createStackNavigator} from "@react-navigation/stack";
import {useColorScheme} from "react-native";
import React from "react";
import WeatherScreen from "../../screens/WeatherScreen/WeatherScreen";
import {CurrentWeatherScreen} from "../../screens/CurrentWeatherScreen/CurrentWeatherScreen";

const Stack = createStackNavigator();

export const WeatherCityStack = () => {
    const scheme = useColorScheme()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="City"
                component={WeatherScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Current"
                component={CurrentWeatherScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>)
}