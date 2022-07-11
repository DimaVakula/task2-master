import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, StyleSheet, ActivityIndicator} from "react-native";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45

export const getWeather = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc56adffbf7df45c88b352092b9406ee`

const fetchData = async ({setIsLoading, setData, city}) => {
    setIsLoading(true)
    await fetch(getWeather(city))
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    setIsLoading(false)
}

export const CityBlock = ({title}) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            fetchData({setIsLoading, setData, city:title})
        },
        [])

    const temp = Math.trunc(data?.main?.temp - 273);

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
