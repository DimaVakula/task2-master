import React from 'react';
import {Text, View, Image, useColorScheme, Pressable} from "react-native";
import {blockSize, width, styles, cityBlockSize} from "./Styles";
import {useNavigation} from '@react-navigation/native'
import {BackgroundGradient} from "../BacgroundGradient/BackgroundGradient";

export const CityListItems = (props) => {
    const scheme = useColorScheme()
    return (
        <View>
            <BackgroundGradient width={width} height={cityBlockSize}/>
            <View style={[styles.oneCity,scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
                <View style={styles.titleTemp}>
                    <Text style={[styles.titleOne, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                        {props.title}
                    </Text>
                    <Text style={[styles.tempOne, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                        {props.temp}
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Image
                        style={styles.imageOne}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                        }}/>
                </View>
            </View>
        </View>
    )
}

export const CityBlock = (props) => {
    const scheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate(
            "Current",
            {
                city: props.title,
                icon: props.icon,
                temp: props.temp
            }
        )}>
            <BackgroundGradient width={blockSize} height={blockSize}/>

            <View style={[styles.rect, scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
                <Text style={[styles.title, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                    {props.title}
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                    }}/>
                <Text style={[styles.temp, scheme === 'dark' ? styles.textDark : styles.textLight]}>
                    {props.temp}
                </Text>
            </View>
        </Pressable>
    )
}
