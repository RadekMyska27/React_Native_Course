import React, {useEffect, useState} from "react";
import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons"

import Tile from "../components/common/Tile";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import Card from "../components/common/Card";
import InstructionsText from "../components/common/InstructionsText";
import Fonts from "../constants/fonts";
import colors from "../constants/colors";

export enum gameDirection {
    lower,
    higher
}

export interface IGameScreenData {
    userNumber: number,
    onGameOver: (isGameOver: boolean, guesses: number) => void
}


let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<IGameScreenData> = (data: IGameScreenData) => {
    const initialGuess: number = generateRandomBetween(minBoundary, maxBoundary, data.userNumber) ?? 1
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guesses, setGuesses] = useState<number[]>([])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    useEffect(() => {
        if (currentGuess === data.userNumber) {
            data.onGameOver(true, guesses.length)
        }
    }, [currentGuess, data.onGameOver, data.userNumber, guesses])

    function nextGuessHandler(direction: gameDirection) {
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
        setGuesses(prevState => [newGuess, ...prevState])
    }

    return (
        <View style={styles.screen}>
            <Tile>Opponent´s Guess</Tile>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionsText style={styles.instructionsText}>{"Higher or lower?"}</InstructionsText>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, gameDirection.lower)}>
                            <AntDesign name="minuscircle" size={24}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, gameDirection.higher)}>
                            <AntDesign name="pluscircle" size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.logsContainer}>
                <InstructionsText style={styles.logListHeading}>Guesses</InstructionsText>
                <FlatList data={guesses} inverted renderItem={({item, index}) => <Text
                    style={styles.logItem}>{item}</Text>}></FlatList>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    instructionsText: {
        marginTop: 12
    },
    screen: {
        flex: 1,
        padding: 24
    },
    buttons: {
        flexDirection: "row",
    },
    button: {
        flex: 1
    },
    logItem: {
        fontSize: 25,
        fontFamily: Fonts.openSans,
        color: colors.primary600
    },
    logListHeading: {
        color: colors.primary800,
        fontWeight: "bold"
    },
    logsContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    }
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