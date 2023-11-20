import React, {useState} from "react";
import {TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export interface IStartGameScreen {
}

const StartGameScreen: React.FC<IStartGameScreen> = (data: IStartGameScreen) => {
    const [gameNumber, setGameNumber] = useState("")

    return <>
        <View>
            <TextInput></TextInput>
            <View>
                <PrimaryButton>Confirm</PrimaryButton>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
        </View>
    </>

}

export default StartGameScreen