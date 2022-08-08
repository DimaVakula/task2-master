import {createStackNavigator} from "@react-navigation/stack";
import {useColorScheme} from "react-native";
import React from "react";
import WeatherScreen from "../../components/screens/WeatherScreen/WeatherScreen";
import {CurrentWeatherScreen} from "../../components/screens/CurrentWeatherScreen/CurrentWeatherScreen";

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