import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={"Your course goal"}></TextInput>
                <Button title={"Add Goal"}></Button>
            </View>

            <View>
                <Text>List of gaols.....</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    },
    
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    textInput:{
        borderWidth: 1,
        borderColor: "white",
        width: "80%"
    }
});
