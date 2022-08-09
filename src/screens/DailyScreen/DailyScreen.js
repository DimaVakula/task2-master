import {ActivityIndicator, FlatList, SafeAreaView, Text, useColorScheme, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {styles} from "./Styles"
import {CityListItems} from "../../components/CitiBlock/CityBlock";
import {locationWeather} from "../../utils";
import * as Location from "expo-location";

const LocationResultList = (props) => {
    const scheme = useColorScheme()
    return(
        <SafeAreaView style={{flex:1, backgroundColor: 'yellow'}}>
            <View style={[styles.title, scheme === 'dark' ? styles.titleDark : styles.titleLight]}>
                <Text style={styles.titleText}>
                    City
                </Text>
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
                renderItem={({item}) => <CityListItems title={props.data.name} icon={props.data.weather[0].icon} temp={Math.trunc(props.data.main.temp - 273)}/>}
            />
        </SafeAreaView>
    )
}

const fetchCity = async ({setLoading, setData: setSearchResult, location}) => {
    const getCity = []
    setLoading(true)
    await fetch(locationWeather(location.coords.latitude,location.coords.longitude))
        .then(response => { return response.json()})
        .then(data => { return getCity.push(data), setSearchResult(getCity)
        })
    setLoading(false)
}

function DailyScreen() {
    const timeRef = useRef(null);
    const [data, setData] = useState();
    const [searchResult, setSearchResult] = useState()
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    let cord = 'Waiting..';
    const scheme = useColorScheme()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            if (errorMsg) {
                cord = errorMsg;
            } else if (location) {
                cord = JSON.stringify(location);
            }
            console.log('geolocation ' +cord)
            const timer = setTimeout (() => {
                fetchCity({setLoading, setData: setSearchResult, location})
                console.log('++' + JSON.stringify(searchResult, null, 2))
            },10000);
            return () => clearTimeout(timer)
        })();
    }, [])

    const onRefresh = () => fetchCity({setLoading, setData: setSearchResult, location})
    return (
            <LocationResultList loading={loading} onRefresh={onRefresh} data={data}/>
    )
}
export default DailyScreen
