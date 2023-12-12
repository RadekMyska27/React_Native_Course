import React, {useCallback, useEffect, useState} from "react";
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [gameNumber, setGameNumber] = useState<number | undefined>(undefined)
    const [isGameOver, setIsGameOver] = useState(false)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here

                //PAIR WITH FONTS AT fonts.ts !!!!!!!
                await Font.loadAsync(
                    {
                        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
                        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
                    }
                );
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    const pickGameNumberHandler = (pickNumber: number) => {
        setGameNumber(pickNumber)
    }

    function setGameOverHandler(isOver: boolean, guesses: number) {
        setIsGameOver(isOver)
        setNumberOfGuesses(guesses)
    }

    let screen = <StartGameScreen onPickNumber={pickGameNumberHandler}/>

    function resetGameHandler() {
        setGameNumber(undefined)
        setIsGameOver(false)
        setNumberOfGuesses(0)
    }


    if (gameNumber) {
        screen = <GameScreen userNumber={gameNumber} onGameOver={setGameOverHandler}/>
    }

    if (isGameOver && gameNumber) {
        screen =
            <GameOverScreen gameNumber={gameNumber} numberOfGuesses={numberOfGuesses} onResetGame={resetGameHandler}/>
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}
                        onLayout={onLayoutRootView}>
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
