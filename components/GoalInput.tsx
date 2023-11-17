import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";


export interface IGoalInputData {
    addGoalHandler: (value: string) => void
}

const GoalInput: React.FC<IGoalInputData> = (data: IGoalInputData) => {
    const [goal, setGoal] = useState("")

    function textInputHandler(value: string) {
        setGoal(value)
    }

    function addGoalPressHandler() {
        data.addGoalHandler(goal)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder={"Your course goal"}
                       onChangeText={textInputHandler}>
            </TextInput>
            <Button title={"Add Goal"} onPress={addGoalPressHandler}></Button>
        </View>
    )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: "70%",
        marginRight: 10,
        padding: 10
    },
});
