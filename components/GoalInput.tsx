import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";


export interface IGoalInputData {
    addGoalHandler: (value: string) => void
    onCancel: () => void
}

const GoalInput: React.FC<IGoalInputData> = (data: IGoalInputData) => {
    const [goal, setGoal] = useState("")

    function textInputHandler(value: string) {
        setGoal(value)
    }

    function addGoalPressHandler() {
        if (goal !== "" && goal)
            data.addGoalHandler(goal)
        setGoal("")
    }

    function cancelHandler() {
        setGoal("")
        data.onCancel()
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder={"Your course goal"} value={goal}
                       onChangeText={textInputHandler}>
            </TextInput>
            <View style={styles.modalButtons}>
                <View style={styles.button}>
                    <Button title={"Add Goal"} onPress={addGoalPressHandler}></Button>
                </View>
                <View style={styles.button}>
                    <Button title={"Cancel"} onPress={cancelHandler}></Button>
                </View>
            </View>

        </View>
    )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center", // content is at the center
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: "grey",
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: "70%",
        marginRight: 10,
        padding: 10
    },
    modalButtons: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
