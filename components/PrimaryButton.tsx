import React from "react";
import {Text, View} from "react-native";

export interface IPrimaryButton {
    children: React.ReactNode
}

const PrimaryButton: React.FC<IPrimaryButton> = (data: IPrimaryButton) => {
    return (
        <View>
            <Text>{data.children}</Text>
        </View>)
}

export default PrimaryButton