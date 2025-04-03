import React, {useState} from "react";
import {Button, StyleSheet, View, Image, Dimensions} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const ImagePicker = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const {width, height} = Dimensions.get("window"); // Get screen width and height
    const MARGIN = 20; // Define your margin

    async function pickImage() {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "image/*", // Allows selecting only images
                copyToCacheDirectory: false,
            });

            if (result.canceled) {
                return
            } else {
                setSelectedImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error("Error picking document:", error);
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        buttonContainer: {
            marginTop: 10, // Adjust spacing between image & button
            width: "80%", // Make the button width responsive
        },
        image: {
            width: width - MARGIN * 2, // Max width minus margin
            height: height / 2, // Max height minus margin
            resizeMode: "contain", // Ensures the image scales properly
        }
    });

    return (
            <View style={styles.container}>
                {selectedImage && (
                        <Image source={{uri: selectedImage}} style={styles.image}/>
                )}
                <View style={styles.buttonContainer}>
                    <Button title="Pick an Image" onPress={pickImage}/>
                </View>
            </View>
    )
}

export default ImagePicker