import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, StyleSheet, ActivityIndicator} from "react-native";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45

export const CityBlock = ({title},{data2}) => {
    const [data2, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            fetchData({setIsLoading, setData, city:title})
        },
        [])

    const temp = Math.trunc(data2?.main?.temp - 273);

    let renderContent = isLoading ? <ActivityIndicator/> : (
        <>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.temp}>
                {temp}
            </Text>
        </>
    )

    return (
        <View style={styles.rect}>
            {renderContent}
        </View>
    )
}

export const styles = StyleSheet.create({
    rect: {
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderWidth: 1,
        width: blockSize,
        height: blockSize,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.24,
        color: '#000000',
    },
    temp: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: -0.41,
        color: '#111212',
    }
})
