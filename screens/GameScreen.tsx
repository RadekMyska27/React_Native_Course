import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import Tile from "../components/common/Tile";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/common/PrimaryButton";


export enum gameDirection {
    lower,
    higher
}

export interface IGameScreenData {
    userNumber: number,
    onGameOver: (isGameOver: boolean) => void
}


let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreenData> = (data: IGameScreenData) => {
    const initialGuess: number = generateRandomBetween(minBoundary, maxBoundary, data.userNumber) ?? 1
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === data.userNumber) {
            data.onGameOver(true)
        }
    }, [currentGuess, data.onGameOver])

    function nextGuessHandler(direction: gameDirection) {

        console.log(direction)

        if ((direction === gameDirection.lower && currentGuess < data.userNumber) ||
            (direction === gameDirection.higher && currentGuess > data.userNumber)) {

            Alert.alert("Dont lie, you know this is wrong....", undefined, [{
                text: "Sorry", style: "cancel"
            }])

            return;
        }

        if (direction === gameDirection.lower) {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess) ?? 1
        setCurrentGuess(newGuess)
    }

    return (
        <View style={styles.screen}>
            <Tile>Opponent´s Guess</Tile>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, gameDirection.lower)}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, gameDirection.higher)}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttons: {}
})

function generateRandomBetween(min: number, max: number, exclude: number): number | undefined {
    if (min === max) {
        return undefined
    }

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export default GameScreen