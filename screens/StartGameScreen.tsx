import React, {useState} from "react";
import {Alert, StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

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
        <View style={styles.inputContainer}>
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
        </View>
    </>

}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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
