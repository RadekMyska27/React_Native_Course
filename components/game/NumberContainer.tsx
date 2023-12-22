import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

interface INumberContainerData {
    children: React.ReactNode

}

const NumberContainer = (data: INumberContainerData) => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.numberText}>{data.children}</Text>
            </View>
        </>
    )

}
export default NumberContainer

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create(
    {
        container: {
            borderWidth: 4,
            borderColor: Colors.accent500,
            padding: 24,
            borderRadius: 8,
            margin: 24,
            alignItems: "center",
            justifyContent: "center"
        },
        numberText: {
            color: Colors.accent500,
            fontSize: 36,
            fontFamily: 'open-sans-bold'
        }
    }
)


