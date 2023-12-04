import React from "react";
import {Text, View} from "react-native";

export interface IGameOverScreenData {
}

const GameOverScreen: React.FC<IGameOverScreenData> = (data: IGameOverScreenData) => {
    return (
        <>
            <View>
                <Text>Game Over !!</Text>
            </View>
        </>
    );

}

export default GameOverScreen