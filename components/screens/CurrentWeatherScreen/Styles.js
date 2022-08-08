import {StyleSheet} from "react-native";
import {DarkTheme, LightTheme} from "../../../constants";

export const styles = StyleSheet.create({
    SafeArea:{
        flex:1
    },
    title:{
        height: 64,
        paddingHorizontal: 16,
        justifyContent:'center'
    },
    titleText:{
        alignSelf: 'center'
    },
    cursor:{
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingHorizontal:16
    },
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: '50%',
        height: '50%'
    },
    textLight: {color: LightTheme.colors.text},
    textDark: {color: DarkTheme.colors.text},
    data:{
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
    },
    temp:{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: -0.41,
    }
})