import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

export interface IPrimaryButton {
    children: React.ReactNode
    onPress: () => void
}

const PrimaryButton: React.FC<IPrimaryButton> = (data: IPrimaryButton) => {
    function onPressHandler() {
        data.onPress()
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPressHandler} style={styles.buttonInnerContainer} android_ripple={{color: "#5e042e"}}>
                <Text style={styles.buttonText}>{data.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#ba0960",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
});
