import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {CATEGORIES} from "../extra-files/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import {MealsOverview} from "../App";

export interface ICategoriesScreenData {
}

const CategoriesScreen = (data: ICategoriesScreenData) => {
    const navigation = useNavigation();

    function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {

        function onPressHandler() {
            //TODO solce problem with type check of navigation !!!!!
            // @ts-ignore
            navigation.navigate(MealsOverview, {
                categoryId: itemData.item.id
            })
        }

        return <CategoryGridTile onPress={onPressHandler} title={itemData.item.title}
                                 color={itemData.item.color}></CategoryGridTile>
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem}
                  numColumns={2}></FlatList>
    )
}


const styles = StyleSheet.create({})

export default CategoriesScreen