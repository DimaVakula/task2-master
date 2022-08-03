import {Dimensions, StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../constants";

const {width} = Dimensions.get('window')
const blockSize = width * 0.45
const cityBlockSize = width * 0.35

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    },
    imageOne:{
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