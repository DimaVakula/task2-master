import {ActivityIndicator, FlatList, SafeAreaView, Text, useColorScheme, View} from "react-native";
import React, {useEffect, useState} from "react";
import {styles} from "./Styles"
import {CityListItems} from "../../components/CitiBlock/CityBlock";
import {locationWeather} from "../../utils";
import * as Location from "expo-location";

const LocationResultList = (props) => {
    const scheme = useColorScheme()
    return(
        <SafeAreaView style={{flex:1, backgroundColor: 'green'}}>
            <View style={styles.title}>
                <Text style={[styles.titleText,scheme === 'dark' ? styles.titleDark : styles.titleLight]}>
                    City
                </Text>
            </View>
            <View style={{height:100, backgroundColor:'white'}}>
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
            </View>
        </SafeAreaView>
    )
}

const fetchCity = async ({setLoading, setSearchResult, location}) => {
    setLoading(true)
    await fetch(locationWeather(location.coords.latitude,location.coords.longitude))
        .then(response => { return response.json()})
        .then(searchResult => { console.log(searchResult, searchResult.name, searchResult.weather[0].icon, searchResult.main.temp)
            setLoading(false)
        })
}

function DailyScreen() {
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
                fetchCity({setLoading, setSearchResult, location})
        })();
    }, [])

    const onRefresh = () => fetchCity({setLoading, setSearchResult, location})
    return (
        <View>
        {loading ? (<ActivityIndicator show={true}/>, console.log('322'))
                : <LocationResultList loading={loading} onRefresh={onRefresh} data={searchResult} searchResult={searchResult}/>
        }
        </View>
    );
}
export default DailyScreen
