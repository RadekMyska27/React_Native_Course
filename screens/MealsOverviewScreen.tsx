import {StyleSheet, Text, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";

export interface IMealsOverviewScreenData {
}

const MealsOverviewScreen = (data: IMealsOverviewScreenData) => {
    const route = useRoute<RouteProp<ParamList>>();

    const categoryId = route.params.categoryId

    return (
        <View style={styles.container}>
            <Text>Meals Overview - {categoryId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen