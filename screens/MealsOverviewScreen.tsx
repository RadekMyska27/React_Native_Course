import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import {MEALS} from "../extra-files/dummy-data";
import Meal from "../models/meal";
import MealItem, {IMealItemData} from "../components/MealItem";

export interface IMealsOverviewScreenData {
}

const MealsOverviewScreen = (data: IMealsOverviewScreenData) => {
    const route = useRoute<RouteProp<ParamList>>();

    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(m => m.categoryIds.indexOf(categoryId) !== -1)

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const data = itemData.item;
    const mealItemProps: IMealItemData = {
        title: data.title,
        complexity: data.complexity,
        imageUrl: data.imageUrl,
        affordability: data.affordability,
        duration: data.duration
    }

    return (<MealItem {...mealItemProps}/>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen