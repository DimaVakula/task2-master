import React, {createContext, useState} from "react";
import {MyTabs} from "./src/navigation";

export const LoadingContext = createContext();

export default function App() {
    const [loading, setLoading] = useState(true)
    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            <MyTabs/>
        </LoadingContext.Provider>
    )
}


