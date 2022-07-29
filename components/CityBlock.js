import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image, useColorScheme} from "react-native";
import {DarkTheme, LightTheme} from "../constants";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45

export const CityBlock = ({title, temp, icon}) => {
    const scheme = useColorScheme()

    return (
        <View style={[styles.rect, scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
            <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {title}
            </Text>
            <Image
                style={styles.image}
                source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}/>
            <Text style={[styles.temp, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {temp}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    rect: {
        boxSizing: 'border-box',
        borderWidth: 2,
        width: blockSize,
        height: blockSize,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectDark: {backgroundColor: DarkTheme.colors.card, borderColor: DarkTheme.colors.border},
    rectLight: {backgroundColor: LightTheme.colors.card, borderColor: LightTheme.colors.border},
    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
    },
    textLight: {color: LightTheme.colors.text},
    textDark: {color: DarkTheme.colors.text},
    temp: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: -0.41,
    },
    image: {
        width: '50%',
        height: '50%'
    }
})
