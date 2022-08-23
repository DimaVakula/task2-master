import React, {createContext, useState} from "react";
import {MyTabs} from "./src/navigation";
import {Modal, useColorScheme, View} from "react-native";
import {styles} from "./src/screens/WeatherScreen/Styles";
import {Animation} from "./src/animation/Animation";

export const LoadingContext = createContext()

const OverlayLoading = (props) => {
    const scheme = useColorScheme()
    return (
        <Modal animationType="fade"
               transparent={true}
               visible={props.show}>
            <View style={[styles.overlay, scheme === 'dark' ? styles.rectDark : styles.rectLight]}>
                <Animation/>
            </View>
        </Modal>
    )
}

const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            <OverlayLoading show={loading}/>
            {children}
        </LoadingContext.Provider>
    )
}

export default function App() {
    return (
        <LoadingProvider>
            <MyTabs/>
        </LoadingProvider>
    )
}



