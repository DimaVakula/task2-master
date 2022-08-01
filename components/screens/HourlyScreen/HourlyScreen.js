import {Text, View, StyleSheet} from "react-native";
import React from "react";

function HourlyScreen() {
    return (
        <View style={style.hourlyscreen}>
            <Text>Hourly!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    hourlyscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default HourlyScreen