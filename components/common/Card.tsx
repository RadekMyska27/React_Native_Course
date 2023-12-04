import React from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

export interface ICardData {
    children: React.ReactNode
}


const Card = (data: ICardData) => {
    return (
        <>
            <View style={styles.inputContainer}>{data.children}</View>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})

export default Card