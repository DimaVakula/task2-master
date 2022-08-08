import react from "react";
import {Text, View, SafeAreaView, Pressable, Image, useColorScheme} from "react-native";
import {styles} from "./Styles";
import {CursorSvg} from "../../icons/CursorSvg";
import React from "react";
import {useNavigation} from '@react-navigation/native'



const WeatherRender = (props) => {
    const navigation = useNavigation()
    const scheme = useColorScheme()
    return(
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.title}>
                <Text style={[styles.titleText, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                    {props.city}
                </Text>
                <Pressable style={styles.cursor} onPress={() => navigation.navigate("City")}>
                    <CursorSvg/>
                </Pressable>
            </View>
            <View style={styles.main}>
                <Text style={[styles.data, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                    {props.data}
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                    }}/>
                <Text style={[styles.temp,scheme === 'dark' ? styles.textDark : styles.textLight]}>
                    {props.temp}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export function CurrentWeatherScreen () {
    var date = new Date().toLocaleString()
    return(
        <WeatherRender city={city} data={date} icon={icon} temp={temp}/>
    )
}