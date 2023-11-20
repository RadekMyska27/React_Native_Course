import React, {useState} from "react";
import {Button, Image, StyleSheet, TextInput, View} from "react-native";


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
            <Image
                style={styles.image}
                source={require('../assets/images/goal.png')}
            />
            <TextInput style={styles.textInput} placeholder={"Your course goal"} value={goal}
                       onChangeText={textInputHandler}>
            </TextInput>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title={"Add Goal"} onPress={addGoalPressHandler} color="#f31282"></Button>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
