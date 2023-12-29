import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export interface IMealItemData {
    title: string,
    imageUrl: string,
    duration: number,
    complexity: string,
    affordability: string
}

const MealItem = (data: IMealItemData) => {

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: "gray"}}>
                <View>
                    <Image source={{uri: data.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{data.title} </Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{data.duration}m</Text>
                    <Text style={styles.detailItem}>{data.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{data.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        padding: 8,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14
    }
})

export default MealItem