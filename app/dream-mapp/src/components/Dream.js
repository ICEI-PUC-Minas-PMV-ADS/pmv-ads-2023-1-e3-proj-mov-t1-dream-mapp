import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';

const Dream = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', marginLeft: 4, width: '80%'}}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <CircularProgress radius={30} value={36}  />
            </View>
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: "center",
        height: 50,
        maxHeight: 80,
        borderWidth: 1,
        borderColor: "#8492A6",
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
        padding: 6
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 14,
    }
});

export default Dream;