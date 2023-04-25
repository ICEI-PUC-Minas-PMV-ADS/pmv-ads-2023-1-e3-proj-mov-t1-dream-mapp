import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from 'react-native-paper';

const TopBar = () => {

    return (
        <View style={styles.container}>
            <Avatar.Image style={styles.icon} size={50} source={require('../assets/avatar.png')} />
            <Text style={styles.username}>Username</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30,
        height: 120,
        maxHeight: 120,
        width: '100%',
        backgroundColor: '#4A59E3',
        borderBottomWidth: .5,
        borderBottomColor: '#8492A6',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    },
    username: {
        fontFamily: 'roboto',
        fontSize: 20,
        color: '#ffff',
        paddingLeft: 10,
        fontFamily: 'Roboto'
    }
});

export default TopBar;