import React from "react";
import {StyleSheet, View} from 'react-native';
import ImagePicker from "./components/ImagePicker";

export interface IGoal {
    text: string,
    id: number
}

export default function App() {
    return (
            <View style={styles.appContainer}>
                <ImagePicker/>
            </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16
    },
    goalContainer: {
        flex: 4
    },
    button: {
        marginTop: 5
    }
});
