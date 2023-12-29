import {Pressable, StyleSheet, Text, View} from "react-native";

export interface ICategoryGridTileData {
    title: string,
    color: string
}

const CategoryGridTile = (data: ICategoryGridTileData) => {

    return (
        <View style={[styles.gridItem]}>
            <Pressable android_ripple={{color: "#ccc"}}
                       style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, {backgroundColor: data.color}]}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    button: {flex: 1},
    buttonPressed: {
        opacity: 0.5 // only fro ios
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {fontWeight: "bold", fontSize: 18}
})

export default CategoryGridTile