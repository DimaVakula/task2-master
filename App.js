import React from 'react';
import {SafeAreaView, TextInput, FlatList, View, Text} from 'react-native';
import {CityBlock} from "./Components/CityBlock";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const data = [
        {title:'Гомель', temp:'30'},
        {title:'Минск', temp:'28'},
        {title:'Гродно', temp:'26'},
        {title:'Витебск', temp:'27'},
        {title:'Могилёв', temp:'29'},
        {title:'Брест', temp:'29'},
        {title:'Могилёв', temp:'29'},
        {title:'Брест', temp:'29'},
];

function WeatherScreen(){
const [text, onChangeText] = React.useState("Enter city here...");
    return(
        <SafeAreaView>
            <TextInput
                style={{
                    flex: 1,
                    display: 'flex',
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                    borderWidth: 1,
                }}
                onChangeText={onChangeText}
                value={text}
            />
            <FlatList
                style={{ backgroundColor: 'purple'}}
                contentContainerStyle={{justifyContent: 'center', paddingHorizontal:16}}
                ItemSeparatorComponent={() => (
                    <View style={{ backgroundColor: "green", height: 8 }} />
                )}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                data={data}
                numColumns={2}
                renderItem={({item}) => <CityBlock title={item.title} temp={item.temp}/>}
            />
        </SafeAreaView>
    );
}

function SettingsScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Weather"
                component={WeatherScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
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
