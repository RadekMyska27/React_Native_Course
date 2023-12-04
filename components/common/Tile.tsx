import React from "react";
import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

export interface ITileData {
    children: React.ReactNode
}

const Tile = (data: ITileData) => {

    return (
        <>
            <Text style={styles.title}>{data.children}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.accent500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    }
})


export default Tile