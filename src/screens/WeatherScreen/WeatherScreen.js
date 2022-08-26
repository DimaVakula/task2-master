import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StatusBar,
} from "react-native";
import {CityBlock} from "../../components/CityBlock/CityBlock";
import {styles} from "./Styles"
import {CrossView, fetchCity, fetchData, OverlayLoading, SearchResultList} from "../../api/api";

const cityList = ['Гомель', 'Минск', 'Гродно', 'Витебск', 'Могилёв', 'Брест'];

function WeatherScreen() {
    const timeRef = useRef(null);
    const [text, onChangeText] = React.useState('')
    const [data, setData] = useState();
    const [searchResult, setSearchResult] = useState()
    const [loading, setLoading] = useState(true);

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
                await fetchCity({setLoading, setData: setSearchResult, text})
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
            {loading ? <OverlayLoading show={loading}/> :
                text === '' ? <FlatList
                        contentContainerStyle={styles.contentContainerStyle}
                        // ItemSeparatorComponent={() => (
                        //     <View style={styles.viewFlat}/>
                        // )}
                        refreshing={loading}
                        onRefresh={onRefresh}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        data={data}
                        ListEmptyComponent={<ActivityIndicator/>}
                        numColumns={2}
                        renderItem={({item}) => <CityBlock title={item.name} icon={item.weather[0].icon}
                                                           temp={Math.trunc(item.main.temp - 273)}/>}
                    />
                    : <SearchResultList data={searchResult} text={text} loading={loading} onRefrsh={onRefreshCity}/>
            }
        </SafeAreaView>
    );
}

export default WeatherScreen
