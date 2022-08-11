import {StyleSheet} from "react-native";

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
    titleLight: {
        color: 'black'
    },
    titleDark: {
        color: 'white'
    },
    titleText: {
        paddingHorizontal: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
        backgroundColor: 'purple'
    },
    contentContainerStyle:
        {
            justifyContent: 'center',
            paddingHorizontal: 16,
           // paddingTop: 16
        },
    viewFlat: {
        height: 8
    },
    columnWrapperStyle: {
        justifyContent: "space-between",
    },
})