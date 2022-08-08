import React from 'react';
import {Text, View, Image, useColorScheme, Pressable} from "react-native";
import {styles} from "./Styles";
import {useNavigation,NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import WeatherScreen from "../screens/WeatherScreen/WeatherScreen";
import {CurrentWeatherScreen} from "../screens/CurrentWeatherScreen/CurrentWeatherScreen";
import HourlyScreen from "../screens/HourlyScreen/HourlyScreen";
import DailyScreen from "../screens/DailyScreen/DailyScreen";
import {DarkTheme, LightTheme} from "../../constants";

const Stack = createStackNavigator();

export const CityListItems = (props) => {
    const scheme = useColorScheme()
    return(
        <View style={styles.oneCity}>
            <View>
            <Text style={[styles.titleOne, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {props.title}
            </Text>
            <Text style={[styles.tempOne,scheme === 'dark' ? styles.textDark : styles.textLight]}>
                 {props.temp}
            </Text>
            </View>
            <View>
            <Image
                style={styles.imageOne}
                source={{
                    uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                }}/>
            </View>

        </View>
)
}

export const WeatherScreenNavigator = () => {
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


export const CityBlock = (props) => {
    const scheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate(
            "Current",
            {city : props.title,
             icon: props.icon,
            temp: props.temp}
        )}>
        <View style={[styles.rect, scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
            <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {props.title}
            </Text>
            <Image
                style={styles.image}
                source={{
                    uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                }}/>
            <Text style={[styles.temp, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {props.temp}
            </Text>
        </View>
        </Pressable>
    )
}
