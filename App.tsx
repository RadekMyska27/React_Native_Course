import {StatusBar, StyleSheet} from 'react-native';
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";


export const MealsCategories: string = "MealsCategories"
export const MealsOverview: string = "MealsOverview"

const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={MealsCategories} component={CategoriesScreen}/>
                    <Stack.Screen name={MealsOverview} component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
});
