import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image, useColorScheme} from "react-native";
import {DarkTheme, LightTheme} from "../constants";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45
const cityBlockSize = width * 0.35


export const City = ({title, temp, icon}) => {
    const scheme = useColorScheme()
    return(
        <View style={styles.oneCity}>
            <Text style={[styles.searchText,scheme === 'dark' ? styles.textDark : styles.textLight]}>search result</Text>
            <Text style={[styles.titleOne, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {title}
            </Text>
            <Image
                style={styles.imageOne}
                source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}/>
            <Text style={[styles.tempOne,scheme === 'dark' ? styles.textDark : styles.textLight]}>
                {temp}
            </Text>
        </View>
)
}

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
    },
    searchText: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: 327,
        height: 18,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 18,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.0866667,
        textTransform: 'uppercase',
        color: '#000',
        flexGrow: 0
    },
    oneCity: {
        backgroundColor: 'green',
        width: '100%',
        height: cityBlockSize,
        justifyContent: 'center'
    },
    imageOne:{
        backgroundColor: 'red',
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '30%',
        height: '50%'
    },
    titleOne: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
},
    tempOne: {
        paddingHorizontal: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: -0.41,
    }
})
