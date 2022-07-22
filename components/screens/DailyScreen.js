import {Text, View, StyleSheet} from "react-native";
import React from "react";

function DailyScreen() {
    return (
        <View style={style.dailyscreen}>
            <Text>Daily!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    dailyscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default DailyScreen