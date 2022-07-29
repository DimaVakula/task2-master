import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextInput,
    useColorScheme,
    View,
} from "react-native";
import {CityBlock} from "../CityBlock";
import {getWeather} from "../../utils";
import {DarkTheme, LightTheme} from "../../constants";
import {CrossSvg} from "../icons/CrossSvg";
import {FailSearchSvg} from "../icons/FailSearchSvg"

const cityList = ['Гомель', 'Минск', 'Гродно', 'Витебск', 'Могилёв', 'Брест', 'Дрогичин', 'Болота'];

const fetchData = async ({setLoading, setData, cityList}) => {
    const dataList = []
    setLoading(true)
    for(let i = 0; i < cityList.length; i++) {
        await fetch(getWeather(cityList[i]))
            .then(response => { return response.json()})
            .then(data => { return dataList.push(data), setData(dataList)})
    }
    setLoading(false)

}

const fetchCity = async ({setLoading, setData: setSearchResult, text}) => {
    const getCity = []
    setLoading(true)
    await fetch(getWeather(text))
        .then(response => { return response.json()})
        .then(data => { return getCity.push(data)
        })
    setSearchResult(getCity)
    setLoading(false)
}

const SearchResultList = ({data})=>{
    const scheme = useColorScheme()
    if(!data || !data[0].weather[0].icon) return <View style={[styles.failSearch, scheme === 'dark' ? styles.failSearchDark : styles.failSearchLight]}><FailSearchSvg/></View>
    else if(data[0].cod == '404') return <View style={[styles.failSearch, scheme === 'dark' ? styles.failSearchDark : styles.failSearchLight]}><FailSearchSvg/></View>
    return <CityBlock title={data[0].name} icon={data[0].weather[0].icon} temp={Math.trunc(data[0].main.temp - 273)}/>
}

function WeatherScreen() {
    const timeRef = useRef(null);
    const [text, onChangeText] = React.useState('');
    const [data, setData] = useState();
    const [searchResult, setSearchResult] = useState()
    const [loading, setLoading] = useState(true)
    const scheme = useColorScheme()

    useEffect(() => {
            fetchData({cityList, setLoading, setData})
        },
        [])

    useEffect(() => {
        if (text.length > 1) {
            if (timeRef.current !== null) {
                clearTimeout(timeRef.current)
            }

            timeRef.current = setTimeout(async () => {
                console.log('fetch ' + text)
                fetchCity({setLoading, setData: setSearchResult, text})
                console.log('++' + JSON.stringify(searchResult, null, 2))
                timeRef.current = null
            }, 1500)
        }
    }, [text])
    const onRefresh = () => fetchData({cityList, setLoading, setData})
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                animated={true}
                barStyle={"default"}/>
            <TextInput
                style={[styles.textInput, scheme === 'dark' ? styles.textInputDark : styles.textInputLight]}
                placeholder='Enter city here...'
                onChangeText={onChangeText}
                placeholderTextColor={scheme === 'dark' ? DarkTheme.colors.border : LightTheme.colors.border}
                value={text}
            />
            <View style={[styles.cross, scheme === 'dark' ? styles.crossDark : styles.crossLight]}>
                <Pressable onPress={() => onChangeText('')}>
                    <CrossSvg/>
                </Pressable>
            </View>
            {loading ? (<ActivityIndicator show={true}/>)
                : text == '' ? <FlatList
                        style={styles.styleFlat}
                        contentContainerStyle={styles.contentContainerStyle}
                        ItemSeparatorComponent={() => (
                            <View style={styles.viewFlat}/>
                        )}
                        refreshing={loading}
                        onRefresh={onRefresh}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        data={data}
                        ListEmptyComponent={<ActivityIndicator/>}
                        numColumns={2}
                        renderItem={({item}) => <CityBlock title={item.name} icon={item.weather[0].icon}
                                                           temp={Math.trunc(item.main.temp - 273)}/>}
                    />
                    :<SearchResultList data={searchResult}/>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    styleFlat: {

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
    cross:
        {
            position: 'absolute',
            height: 30,
            width: 30,
            marginTop: 40,
            right: 16,
            alignSelf: 'flex-end'
        },
    crossDark:{backgroundColor: DarkTheme.colors.card, borderColor: DarkTheme.colors.border},
    crossLight:{backgroundColor: LightTheme.colors.card, borderColor: LightTheme.colors.border},
    safeArea:{
        flex:1
    },
    failSearch: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    failSearchDark:{backgroundColor: DarkTheme.colors.card, borderColor: DarkTheme.colors.border},
    failSearchLight:{backgroundColor: LightTheme.colors.card, borderColor: LightTheme.colors.border},
})

export default WeatherScreen
