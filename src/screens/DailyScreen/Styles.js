import {StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../constants";

export const styles = StyleSheet.create({
    dailyScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        height: 64,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    textLight: {color: LightTheme.colors.text},
    textDark: {color: DarkTheme.colors.text},
    titleText: {
        paddingHorizontal: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
    },
    contentContainerStyle:
        {
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingTop: 16,
        },
    viewFlat: {
        height: 8
    },
    columnWrapperStyle: {
        justifyContent: "space-between",
    },
    safeArea: {
        flex:1
    },
})