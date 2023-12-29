import {StatusBar, StyleSheet} from 'react-native';
import React from "react";
import CategoriesScreen from "./screens/CategoriesScreen";


export default function App() {

    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <CategoriesScreen></CategoriesScreen>
        </>
    );
}


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
});
