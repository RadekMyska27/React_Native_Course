import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import React, {useState} from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";


export default function App() {
    const [gameNumber, setGameNumber] = useState<number | undefined>(undefined)
    const [isGameOver, setIsGameOver] = useState(false)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)

    const [fontsLoaded] = useFonts(
        {
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        }
    )

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    const pickGameNumberHandler = (pickNumber: number) => {
        setGameNumber(pickNumber)
    }

    function setGameOverHandler(isOver: boolean, guesses: number) {
        setIsGameOver(true)
        setNumberOfGuesses(guesses)
    }

    let screen = <StartGameScreen onPickNumber={pickGameNumberHandler}/>

    function resetGameHandler() {
        setGameNumber(undefined)
        setIsGameOver(false)
        screen = <StartGameScreen onPickNumber={pickGameNumberHandler}/>
    }


    if (gameNumber) {
        screen = <GameScreen userNumber={gameNumber} onGameOver={setGameOverHandler}/>
    }

    if (isGameOver && gameNumber) {
        screen =
            <GameOverScreen gameNumber={gameNumber} numberOfGuesses={numberOfGuesses} onResetGame={resetGameHandler}/>
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} resizeMode={"cover"}
                             style={styles.rootScreen} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
});
