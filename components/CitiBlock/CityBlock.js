import React from 'react';
import {Text, View, Image, useColorScheme} from "react-native";
import {styles} from "./Styles";



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

export const CityBlock = (props) => {
    const scheme = useColorScheme()
    return (
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
    )
}
