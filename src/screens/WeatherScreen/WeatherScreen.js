import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    useColorScheme,
    View,
    Modal, Dimensions,
} from "react-native";
import {CityBlock,CityListItems} from "../../components/CitiBlock/CityBlock";
import {getWeather} from "../../utils";
import {DarkTheme, LightTheme} from "../../constants";
import {CrossSvg} from "../../components/icons/CrossSvg";
import {FailSearchSvg} from "../../components/icons/FailSearchSvg";
import {styles} from "./Styles"
import {Canvas, rect, rrect, useImage,Image, ColorMatrix, Blur,DiffRect,Group} from "@shopify/react-native-skia";



const cityList = ['Гомель', 'Минск', 'Гродно', 'Витебск', 'Могилёв', 'Брест'];

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
        .then(data => { return getCity.push(data), setSearchResult(getCity)
        })
    setLoading(false)
}

const SearchResultList = (props)=>{
    const scheme = useColorScheme()
    if(!props.data || props.data[0].cod === '404' || !props.data[0].weather[0].icon )
        return <View style={[styles.failSearch, scheme === 'dark' ? styles.failSearchDark : styles.failSearchLight]}><FailSearchSvg/><Text style={[styles.failSearchText,scheme === 'dark' ? styles.failSearchLightText : styles.failSearchDarkText]}>No data for {props.text}</Text></View>
    return (<SafeAreaView>
        <View>
            <Text style={[styles.searchText,scheme === 'dark' ? styles.textDark : styles.textLight]}>search result</Text>
        </View>
    <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={() => (
            <View style={styles.viewFlat}/>
        )}
        refreshing={props.loading}
        onRefresh={props.onRefresh}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={props.data}
        ListEmptyComponent={<ActivityIndicator/>}
        numColumns={2}
        renderItem={({item}) => <CityListItems title={props.data[0].name} icon={props.data[0].weather[0].icon} temp={Math.trunc(props.data[0].main.temp - 273)}/>}
            />
    </SafeAreaView>)
}

const CrossView = (props) => {
    const scheme = useColorScheme()
    return(
        <View style={styles.crossView}>
            <TextInput
                style={[styles.textInput, scheme === 'dark' ? styles.textInputDark : styles.textInputLight]}
                placeholder='Enter city here...'
                onChangeText={text => props.onChangeText(text.trim())}
                placeholderTextColor={scheme === 'dark' ? DarkTheme.colors.border : LightTheme.colors.border}
                value={props.text}
            />
            {props.text.length > 0&& (<Pressable style={styles.cross} onPress={() => props.onChangeText('')}>
            <CrossSvg/>
        </Pressable>)}
        </View>
    )
}
const { width, height } = Dimensions.get('screen');
const SIZE = width - 50;
const PADDING = height / 4;

const path = 'M2 44.982V22.001C2 10.955 10.954 2 22 2h23.197';
const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(rect(25, PADDING, SIZE, SIZE), 20, 20);


export const OverlayLoading = (props) => {
    const image = useImage(require("../../../assets/baltika.png"));

    return(
            <Canvas
                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
            >
                <Group color={'gray'}>
                    <DiffRect outer={outer} inner={inner} opacity={0.5}>
                        <Blur blur={7} />
                    </DiffRect>
                    {image && (
                        <Image
                            image={image}
                            fit="contain"
                            x={25}
                            y={PADDING}
                            width={SIZE}
                            height={SIZE}
                        />
                    )}
                </Group>
            </Canvas>
    )
}

function WeatherScreen() {
    const timeRef = useRef(null);
    const [text, onChangeText] = React.useState('')
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
    const onRefreshCity = () => fetchCity({setLoading, setData: setSearchResult, text})
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                animated={true}
                barStyle={"default"}
            />
                <CrossView text={text} onChangeText={onChangeText}/>
            {
                text === ''  ? <FlatList
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
                :<SearchResultList data={searchResult} text={text} loading={loading} onRefrsh={onRefreshCity}/>}
            {true && <OverlayLoading show={true} scheme={scheme}/>}

        </SafeAreaView>
    );
}

export default WeatherScreen
