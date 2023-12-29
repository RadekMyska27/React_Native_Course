import {StatusBar, StyleSheet} from 'react-native';
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {MealsCategories, MealsOverview} from "./routesConst";




const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: "#3e2f2f"},
                    contentStyle: {backgroundColor: "#483636"},
                    headerTintColor: "white"
                }}
                >
                    <Stack.Screen name={MealsCategories} component={CategoriesScreen}
                                  options={{title: "All Categories"}}/>
                    <Stack.Screen name={MealsOverview} component={MealsOverviewScreen} options={{title: "Meals"}}/>
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
