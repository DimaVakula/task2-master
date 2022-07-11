import React from 'react';
import {SafeAreaView, TextInput, FlatList, View, Text, StyleSheet, StatusBar} from 'react-native';
import {CityBlock} from "./Components/CityBlock";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const data = [
    {title: 'Гомель', temp: '30'},
    {title: 'Минск', temp: '28'},
    {title: 'Гродно', temp: '26'},
    {title: 'Витебск', temp: '27'},
    {title: 'Могилёв', temp: '29'},
    {title: 'Дрогичин', temp: '29'},
    {title: 'Болота', temp: '29'},
    {title: 'Белоозёрск', temp: '29'},
];

function WeatherScreen() {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                barStyle={"dark-content"}/>
            <TextInput
                style={style.textinput}
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
                columnWrapperStyle={style.columnWrapperStyle}
                data={data}
                numColumns={2}
                renderItem={({item}) => <CityBlock title={item.title} temp={item.temp}/>}
            />
        </SafeAreaView>
    );
}

function DailyScreen() {
    return (
        <View style={style.dailyscreen}>
            <Text>Daily!</Text>
        </View>
    );
}

function HourlyScreen() {
    return (
        <View style={style.hourlyscreen}>
            <Text>Hourly!</Text>
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
                name="Daily"
                component={DailyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Daily',
                }}
            />
            <Tab.Screen
                name="Hourly"
                component={HourlyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Hourly',
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
    textinput: {
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
    },
    dailyscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hourlyscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

