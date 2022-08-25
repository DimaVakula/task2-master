import {Dimensions, StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../constants";
import {canvasPadding} from "../BacgroundGradient/BackgroundGradient";

const {width} = Dimensions.get('window')
export const blockSize = width * 0.5
const cityBlockSize = width * 0.35
const contentPadding = canvasPadding/1.8

export const styles = StyleSheet.create({
    // rect: {
    //     // borderWidth: 2,
    //     width: blockSize-canvasPadding*2,
    //     height: blockSize-canvasPadding*2,
    //     borderRadius: 5,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    rect: {
        position: 'absolute',
        top: contentPadding,
        bottom: contentPadding,
        left: contentPadding,
        right: contentPadding,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
    oneCity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    },
    imageOne: {
        width: 64,
        height: 64
    },
    titleOne: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24
    },
    tempOne: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: -0.41,
    }
})
