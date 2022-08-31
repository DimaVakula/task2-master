import React from "react";
import {MyTabs} from "./src/navigation";
import {store} from "./src/store/Store";
import {Provider} from "react-redux";


export default function App() {
    return (
        <Provider store={store}>
            <MyTabs/>
        </Provider>
    )
}



