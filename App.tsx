import {Button, FlatList, Modal, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export interface IGoal {
    text: string,
    id: number
}

export default function App() {
    const [goals, setGoals] = useState<IGoal[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    function addGoalHandler(goal: string) {
        const generatedKey = Math.random()

        const goalToInsert: IGoal = {id: generatedKey, text: goal}

        setGoals(prevState => {
            return [...prevState, goalToInsert]
        })
        setIsModalOpen(false)
    }

    function removeGoalHandler(id: number) {
        setGoals(currentGoals => {
            return currentGoals.filter(g => g.id !== id)
        })
    }
    
    function onCancelAddGoalHandler() {
        setIsModalOpen(false)
    }

    return (
        <View style={styles.appContainer}>
            <Button title={"Add new goal"} onPress={() => setIsModalOpen(true)}></Button>

            <Modal visible={isModalOpen} animationType={"slide"} onRequestClose={onCancelAddGoalHandler}>
                <GoalInput addGoalHandler={addGoalHandler} onCancel={onCancelAddGoalHandler}/>
            </Modal>

            <View style={styles.goalContainer}>
                {/* first option add scroll list - this is not effective for list because all memmbers are rendered even if member is not visible*/}

                {/*<ScrollView>*/}
                {/*    {goals.map((g, index) => <Text key={index}>{g}</Text>)}*/}
                {/*</ScrollView>*/}

                {/* second option of add scroll list*/}

                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem goal={itemData.item} removeGoalHandler={removeGoalHandler}/>
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
    goalContainer: {
        flex: 4
    }
});
