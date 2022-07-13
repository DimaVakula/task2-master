import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from "react-native";

const {width} = Dimensions.get('window')

const blockSize = width * 0.45

export const CityBlock = ({title,temp, icon}) => {
return(
    <View style={styles.rect}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Image
            style={{width:'50%', height:'50%'}}
            source={{
            uri:`http://openweathermap.org/img/wn/${icon}@2x.png`,
        }}/>
        <Text style={styles.temp}>
            {temp}
        </Text>
    </View>

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
