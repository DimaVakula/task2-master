import React, {useEffect, useState} from 'react';
import {SafeAreaView, TextInput, FlatList, View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {CityBlock} from "./src/components/CityBlock";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {getWeather} from "./src/utils";

const Tab = createBottomTabNavigator();

const cityList = ['Гомель', 'Минск', 'Гродно', 'Витебск', 'Могилёв', 'Брест', 'Могилёв', 'Брест',];

const fetchData = async ({setLoading, setData, cityList}) => {
    setLoading(true)
    const dataList = []
    await Promise.all(cityList.map(async (city) => {
        await fetch(getWeather(city))
            .then(response => response.json())
            .then(data => {
                dataList.push(data)
            })

    }))
    setData(dataList)
    setLoading(false)
}


function WeatherScreen() {
    const [text, onChangeText] = React.useState('');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData({cityList, setLoading, setData})
    }, [])

    const onRefresh = () => fetchData({cityList, setLoading, setData})


    return (
        <SafeAreaView>
            <TextInput
                style={style.TextInput}
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
                renderItem={({item}) => <CityBlock title={item.name} temp={Math.trunc(item.main.temp - 273)}/>}
            />
        </SafeAreaView>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="City"
                component={WeatherScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'City',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    TextInput: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderWidth: 1,
    },
    contentContainerStyle:
        {
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingTop: 16
        },
    viewFlat: {
        backgroundColor: "white",
        height: 8
    },
    columnWrapperStyle: {
        justifyContent: "space-between",
    },
    styleFlat: {
        backgroundColor: 'white',
        // flex:1
        height:'100%'
    }

})

