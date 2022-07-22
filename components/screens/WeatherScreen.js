import React, {useEffect, useRef, useState} from "react";
import {ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, TextInput, View} from "react-native";
import {CityBlock} from "../CityBlock";
import {getWeather} from "../../utils";

const cityList = ['Гомель', 'Минск', 'Гродно', 'Витебск', 'Могилёв', 'Брест', 'Дрогичин', 'Болота',];

const fetchData = async ({setLoading, setData, cityList}) => {
    const dataList = []
    setLoading(true)
    await Promise.all(cityList.map(async (city) => {
        await fetch(getWeather(city))
            .then(response => response.json())
            .then(data => {
                dataList.push(data)
                //console.log(data.weather[0].icon);
            })
    }))
    setData(dataList)
    setLoading(false)
}

const fetchCity = async ({setLoading, setData, text}) => {
    setLoading(true)
    await fetch(getWeather(text))
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log(data);
        })
    setLoading(false)
}

function WeatherScreen() {
    const timeRef = useRef(null);
    const [text, onChangeText] = React.useState('');
    const [searchResult,setSearchResult] = useState()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)

    const temp = Math.trunc(data?.main?.temp - 273);

    useEffect(() => {
            fetchData({cityList, setLoading, setData})
        },
        [])

    useEffect(() => {
        if (text.length > 1) {
            if(timeRef.current!== null) {
                clearTimeout(timeRef.current)
            }

            timeRef.current = setTimeout(async () => {
                console.log('fetch ' + text)
                fetchCity({setLoading, setData: setSearchResult, text})
                console.log('+' + JSON.stringify(searchResult,null, 2))
                timeRef.current = null
            }, 1500)
        }
    }, [text])

    const onRefresh = () => fetchData({cityList, setLoading, setData})
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                barStyle={"dark-content"}/>
            <TextInput
                style={style.textInput}
                placeholder='Enter city here...'
                onChangeText={onChangeText}
                value={text}
            />
            <FlatList
                style={style.styleFlat}
                contentContainerStyle={style.contentContainerStyle}
                ItemSeparatorComponent={() => (
                    <View style={style.viewFlat}/>
                )}
                refreshing={loading}
                onRefresh={onRefresh}
                columnWrapperStyle={style.columnWrapperStyle}
                data={data}
                ListEmptyComponent={<ActivityIndicator/>}
                numColumns={2}
                renderItem={({item}) => <CityBlock title={item.name} icon={item.weather[0].icon}
                                                   temp={Math.trunc(item.main.temp - 273)}/>}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    textInput: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderWidth: 1,
    },
    styleFlat: {
        backgroundColor: 'white',
        // flex:1
        height: '100%'
    },
    viewFlat: {
        backgroundColor: "white",
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
})

export default WeatherScreen