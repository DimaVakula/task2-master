import {Dimensions, StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../constants";


export const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: 16,
        height: 64,
        borderWidth: 1,
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
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingTop: 16
        },
    crossView: {
        justifyContent: 'center'
    },
    cross:
        {
            position: 'absolute',
            alignSelf: 'flex-end',
            paddingHorizontal: 16
        },
    safeArea: {
        flex: 1
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
        width: 327,
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
    }
})