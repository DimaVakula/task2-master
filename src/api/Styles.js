import {StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../src/constants/index";
import {canvasPadding} from "../components/BacgroundGradient/BackgroundGradient";
import {cityBlockSize, width} from "../components/CityBlock/Styles";

const contentPadding = canvasPadding/1.8

export const styles = StyleSheet.create({
    textInput: {
        position: 'absolute',
        top: contentPadding,
        bottom: contentPadding,
        left: contentPadding,
        right: contentPadding,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    textInputLight: {
        backgroundColor: LightTheme.colors.card,
        borderColor: LightTheme.colors.border,
        color: LightTheme.colors.text
    },
    textInputDark: {
        backgroundColor: DarkTheme.colors.card,
        borderColor: DarkTheme.colors.border,
        color: DarkTheme.colors.text
    },
    viewFlat: {
        height: 8
    },
    columnWrapperStyle: {
        justifyContent: "space-between",
    },
    contentContainerStyle:
        {
            paddingTop: 16
        },
    crossView: {
        justifyContent: 'center'
    },
    cross:
        {
            position: 'absolute',
            alignSelf: 'flex-end',
            paddingHorizontal: 26
        },
    safeArea: {
        flex: 1,
    },
    failSearch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    failSearchDark: {backgroundColor: DarkTheme.colors.card, borderColor: DarkTheme.colors.border},
    failSearchLight: {backgroundColor: LightTheme.colors.card, borderColor: LightTheme.colors.border},
    failSearchText: {
        fontSize: 24,
        width: width,
        height: 28,
        lineHeight: 28,
        textAlign: 'center',
        letterSpacing: 0.2,
        flexGrow: 0,
        top: 24,
    },
    failSearchLightText: {color: 'white'},
    failSearchDarkText: {color: 'black'},
    searchText: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: width,
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
    rectDark: {backgroundColor: DarkTheme.colors.card, borderColor: DarkTheme.colors.border},
    rectLight: {backgroundColor: LightTheme.colors.card, borderColor: LightTheme.colors.border},
    textLight: {color: LightTheme.colors.text},
    textDark: {color: DarkTheme.colors.text},
    overlay:{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
})