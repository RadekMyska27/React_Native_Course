import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

import {IGoal} from "../App";

export interface IGoalItemData {
    goal: IGoal
    removeGoalHandler: (id: number) => void
}

const GoalItem: React.FC<IGoalItemData> = (data: IGoalItemData) => {
    function removeHandler() {
        data.removeGoalHandler(data.goal.id)
    }

    return (
        <Pressable onPress={removeHandler}>
            <View style={styles.goalItem}>
                <Text>{data.goal.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        padding: 5,
        backgroundColor: "green"
    }
});