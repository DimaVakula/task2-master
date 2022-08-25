import {ActivityIndicator, FlatList, SafeAreaView, Text, useColorScheme, View} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {styles} from "./Styles"
import {CityListItems} from "../../components/CityBlock/CityBlock";
import {locationWeather} from "../../utils";
import * as Location from "expo-location";
import {LoadingContext} from "../../../App";

const LocationResultList = (props) => {
    const scheme = useColorScheme()
    return (<SafeAreaView>
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
                renderItem={({item}) => <CityListItems title={item.name} icon={item.weather[0].icon} temp={Math.trunc(item.main.temp - 273)}/>}
        />
    </SafeAreaView>)
}

const fetchCity = async ({setLoading, setSearchResult, location}) => {
    const getCity = []
    setLoading(true)
    await fetch(locationWeather(location.coords.latitude,location.coords.longitude))
        .then(response => { return response.json()})
        .then(data => { return getCity.push(data), setSearchResult(getCity)
        })
    setLoading(false)
}

function DailyScreen() {
    const [searchResult, setSearchResult] = useState()
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const {loading, setLoading} = useContext(LoadingContext)
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
                fetchCity({setLoading, setSearchResult, location})
        })();
    }, [])

    const onRefresh = () => fetchCity({setLoading, setSearchResult, location})
    return (
        <SafeAreaView style={styles.safeArea}>
        {searchResult !== null ? <LocationResultList loading={loading} onRefresh={onRefresh} data={searchResult}/>
                : <View style={{alignItems: 'center', justifyContent: 'center'}}><Text>FAIL LOCATION</Text></View>
        }
        </SafeAreaView>
    );
}
export default DailyScreen
