import {StyleSheet, Text, View} from "react-native";
import React from "react";
import colors from "../../constants/colors";

export interface IGuessLogItem {
    index: string | number,
    item: string | number
}

const GuessLogItem = (data: IGuessLogItem) => {
    return (
        <View style={styles.logItem}>
            <Text>#{data.index}</Text>
            <Text>Opponent's Guess: {data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logItem: {
        borderColor: colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
})

export default GuessLogItem