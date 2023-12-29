import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import {CATEGORIES} from "../extra-files/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";

export interface ICategoriesScreenData {
}

const CategoriesScreen = (data: ICategoriesScreenData) => {

    return (
        <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem}
                  numColumns={2}></FlatList>
    )
}

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}></CategoryGridTile>
}

const styles = StyleSheet.create({})

export default CategoriesScreen