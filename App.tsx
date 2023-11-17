import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState<string[]>([])

    function addGoalHandler(goal: string) {
        setGoals(prevState => {
            return [...prevState, goal]
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler}/>

            <View style={styles.goalContainer}>
                {/* first option add scroll list - this is not effective for list because all memmbers are rendered even if member is not visible*/}

                {/*<ScrollView>*/}
                {/*    {goals.map((g, index) => <Text key={index}>{g}</Text>)}*/}
                {/*</ScrollView>*/}

                {/* second option of add scroll list*/}

                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem goal={itemData.item}/>
                    }}
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16
    },

    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
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

    goalContainer: {
        flex: 4
    }
});
