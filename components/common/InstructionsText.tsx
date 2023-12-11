import React from "react";
import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

export interface IInstructionsText {
    children: React.ReactNode
    style?: any
}


const InstructionsText = (data: IInstructionsText) => {
    return (
        <>
            <Text style={[styles.instructionText, data.style]}>{data.children}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
})

export default InstructionsText