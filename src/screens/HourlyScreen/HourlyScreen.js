import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from '../../feature/counterSlice'
import {Button, SafeAreaView, Text, View} from "react-native";

export function HourlyScreen() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button onClick={() => dispatch(increment())}
            title="increment"/>
            <Text style={{color: 'white'}}>{count}</Text>
            <Button onClick={() => dispatch(decrement())}
            title="decrement"/>
        </View>
        </SafeAreaView>
    );
}
