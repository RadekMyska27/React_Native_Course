import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export interface IStartGameScreen {
}

const StartGameScreen: React.FC<IStartGameScreen> = (data: IStartGameScreen) => {
    const [gameNumber, setGameNumber] = useState("")

    return <>
        <View style={styles.inputContainer}>
            <TextInput></TextInput>
            <View>
                <PrimaryButton>Confirm</PrimaryButton>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
        </View>
    </>

}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#72063c",
        borderRadius: 8,
        elevation: 4, //shadow android only property
    }
});
