import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/colors";

export interface IPrimaryButton {
    children: React.ReactNode
    onPress: (value?: any) => void
}

const PrimaryButton: React.FC<IPrimaryButton> = (data: IPrimaryButton) => {
    function onPressHandler() {
        data.onPress()
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPressHandler} style={styles.buttonInnerContainer}
                       android_ripple={{color: Colors.primary600}}>
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
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    }
});
