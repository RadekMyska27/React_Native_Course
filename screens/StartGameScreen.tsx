import React, {useState} from "react";
import {Alert, StyleSheet, TextInput, View} from "react-native";

import PrimaryButton from "../components/common/PrimaryButton";
import Colors from "../constants/colors";
import Tile from "../components/common/Tile";
import Card from "../components/common/Card";
import InstructionsText from "../components/common/InstructionsText";

export interface IStartGameScreen {
    onPickNumber: (pickNumber: number) => void
}

const StartGameScreen: React.FC<IStartGameScreen> = (data: IStartGameScreen) => {
    const [enteredNumber, setEnteredNumber] = useState("")

    function enteredNameHandler(newNumber: string) {
        setEnteredNumber(newNumber)
    }

    function resetInputHandler() {
        setEnteredNumber("")
    }

    function confirmHandler() {
        const gameNumber = parseInt(enteredNumber, 10)

        if (isNaN(gameNumber) || gameNumber <= 0 || gameNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be number between 1 and 99.", [{
                text: "ok",
                style: "destructive",
                onPress: resetInputHandler
            }])

            return
        }

        data.onPickNumber(gameNumber)
    }

    return <>
        <View style={styles.topContainer}>
            <Tile>Guess My Number</Tile>
            <Card>
                <InstructionsText>Enter a Game Number</InstructionsText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType={"numeric"} // recomand for inputs where user set custom text for example email 
                    autoCapitalize={"none"} // recomand for inputs where user set custom text for example email
                    autoCorrect={false}
                    onChangeText={enteredNameHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    </>

}

export default StartGameScreen

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: "row",
    },
    button: {
        flex: 1
    }
});
