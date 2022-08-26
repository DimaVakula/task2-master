import {getWeather} from "../utils";
import {
    ActivityIndicator, Dimensions,
    FlatList, Modal,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    useColorScheme,
    View
} from "react-native";
import {styles} from "./Styles";
import {FailSearchSvg} from "../components/icons/FailSearchSvg";
import {CityListItems} from "../components/CityBlock/CityBlock";
import {DarkTheme, LightTheme} from "../constants";
import {CrossSvg} from "../components/icons/CrossSvg";
import React from "react";
import {BackgroundGradient} from "../components/BacgroundGradient/BackgroundGradient";
import {Animation} from "../animation/Animation";

const {width} = Dimensions.get('window')
const blockSize = width * 0.25

export const fetchData = async ({setLoading, setData, cityList}) => {
    const dataList = []
    setLoading(true)
    for (let i = 0; i < cityList.length; i++) {
        await fetch(getWeather(cityList[i]))
            .then(response => {
                return response.json()
            })
            .then(data => {
                return dataList.push(data), setData(dataList)
            })
    }
    setLoading(false)
}

export const fetchCity = async ({setLoading, setData: setSearchResult, text}) => {
    const getCity = []
    setLoading(true)
    await fetch(getWeather(text))
        .then(response => {
            return response.json()
        })
        .then(data => {
            return getCity.push(data), setSearchResult(getCity)
        })
    setLoading(false)
}

export const SearchResultList = (props) => {
    const scheme = useColorScheme()
    if (!props.data || props.data[0].cod === '404' || !props.data[0].weather[0].icon)
        return <View style={[styles.failSearch, scheme === 'dark' ? styles.rectDark : styles.rectLight]}><FailSearchSvg/>
            <Text style={[styles.failSearchText, scheme === 'dark' ? styles.failSearchLightText : styles.failSearchDarkText]}>No data for {props.text}</Text></View>
    return (<SafeAreaView>
        <View>
            <Text style={[styles.searchText, scheme === 'dark' ? styles.textDark : styles.textLight]}>search result</Text>
        </View>
        <FlatList
            contentContainerStyle={styles.contentContainerStyle}
         //   ItemSeparatorComponent={() => (
          //      <View style={styles.viewFlat}/>
           // )}
            refreshing={props.loading}
            onRefresh={props.onRefresh}
            columnWrapperStyle={styles.columnWrapperStyle}
            data={props.data}
            ListEmptyComponent={<ActivityIndicator/>}
            numColumns={2}
            renderItem={({item}) => <CityListItems title={props.data[0].name} icon={props.data[0].weather[0].icon}
                                                   temp={Math.trunc(props.data[0].main.temp - 273)}/>}
        />
    </SafeAreaView>)
}

export const CrossView = (props) => {
    const scheme = useColorScheme()
    return (
        <View style={styles.crossView}>
            <BackgroundGradient width={width} height={blockSize}/>
            <TextInput
                style={[styles.textInput, scheme === 'dark' ? styles.textInputDark : styles.textInputLight]}
                placeholder='Enter city here...'
                onChangeText={text => props.onChangeText(text.trim())}
                placeholderTextColor={scheme === 'dark' ? DarkTheme.colors.border : LightTheme.colors.border}
                value={props.text}
            />
            {props.text.length > 0 && (<Pressable style={styles.cross} onPress={() => props.onChangeText('')}>
                <CrossSvg/>
            </Pressable>)}
        </View>
    )
}

export const OverlayLoading = (props) => {
    const scheme = useColorScheme()
    return (
        <Modal animationType="fade"
               transparent={true}
               visible={props.show}>
            <View style={[styles.overlay, scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
                <Animation/>
            </View>
        </Modal>
    )
}

function api() {
}