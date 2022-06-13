import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from "react-native";
import {ActivityIndicator} from "react-native-web";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45

const url='https://api.openweathermap.org/data/2.5/weather?q=Gomel&appid=fc56adffbf7df45c88b352092b9406ee';

export const City = ({city}) => {
    return(
    url(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=fc56adffbf7df45c88b352092b9406ee`)
)}

export const CityBlock = ({title})=>{
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState();
    useEffect(() => {
            setIsLoading(true)
            fetch(url).then(response => response.json()).then(data => {console.log(data)
                setData(data.main.temp)});
            setIsloading(false)
        },
        [])
    if(isLoading) return <ActivityIndicator/>
    const temp = Math.trunc(data.main.temp -273);
    return(
    <View style={styles.rect}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.temp}>
            {temp}
        </Text>
    </View>
)}

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
    title:{
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
