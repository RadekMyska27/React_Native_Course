import React, {useState} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export interface IStartGameScreen {
}

const StartGameScreen: React.FC<IStartGameScreen> = (data: IStartGameScreen) => {
    const [gameNumber, setGameNumber] = useState("")

    return <>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={"numeric"} // recomand for inputs where user set custom text for example email 
                autoCapitalize={"none"} // recomand for inputs where user set custom text for example email
                autoCorrect={false}
            />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
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
        elevation: 4, //shadow android only property,
        // justifyContent: "center",
        alignContent: "center",
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderColor: "yellow",
        borderBottomWidth: 2,
        color: "yellow",
        marginVertical: 8,
        width: 100,
    },
    buttons: {
        flexDirection: "row",
    },
    button: {
        flex: 1
    }
});
