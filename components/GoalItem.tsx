import React from 'react';
import {StyleSheet, Text} from "react-native";

export interface IGoalItemData {
    goal: string
}

const GoalItem: React.FC<IGoalItemData> = (data: IGoalItemData) => {
    return <Text>{data.goal}</Text>
}

export default GoalItem

const styles = StyleSheet.create({});