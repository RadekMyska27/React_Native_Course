import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import Tile from "../components/common/Tile";
import colors from "../constants/colors";
import PrimaryButton from "../components/common/PrimaryButton";
import {dimensions} from "../constants/dimensions";

export interface IGameOverScreenData {
    numberOfGuesses: number
    gameNumber: number
    onResetGame: () => void
}

const GameOverScreen: React.FC<IGameOverScreenData> = (data: IGameOverScreenData) => {

    function startNewGameHandler() {

    }

    return (
        <>
            <View style={styles.rootContainer}>
                <Tile>Game Over !</Tile>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../assets/images/success.png")}/>
                </View>
                <View>
                    <Text style={styles.generalText}>Your phone needed <Text
                        style={styles.highlight}>{data.numberOfGuesses}</Text> rounds to
                        guess the number <Text style={styles.highlight}>{data.gameNumber}</Text>.</Text>
                </View>
                <PrimaryButton onPress={data.onResetGame}>Start New Game</PrimaryButton>
            </View>
        </>
    );
}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: deviceWidth < dimensions.smallScreenWidth ? 150 : 300,
        height: deviceWidth < dimensions.smallScreenWidth ? 150 : 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    generalText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: colors.primary500
    }
})

export default GameOverScreen