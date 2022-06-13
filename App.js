import React from 'react';
import {SafeAreaView, TextInput, FlatList, View} from 'react-native';
import {CityBlock} from "./Components/CityBlock";

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

export default function App() {
    const [text, onChangeText] = React.useState("Enter city here...");
    return (
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
    )
}
