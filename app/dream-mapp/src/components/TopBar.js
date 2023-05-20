import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome5";

const TopBar = ({ navigation }) => {

    return (
        <View style={styles.containerTopBar}>
            <View style={styles.positionFoto}>
            <Avatar.Image style={styles.icon} size={50} source={require('../assets/avatar.png')} />
            </View>
            <View style={styles.positionUserName}>
            <Text style={styles.username}>Username</Text>
            </View>
            <View style={styles.positionIcon}>
            <TouchableOpacity style={styles.leftIcon}>
            <Icon name="cog" size={25} color="white" onPress={() => navigation.navigate('Profile')} />
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTopBar: {
        // position: 'relative',
        position: 'absolute',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 1,
        height: 800,
        maxHeight: '14%',
        width: '100%',
        backgroundColor: '#4A59E3',
        zIndex: 1,
    },
    positionFoto: {
        marginTop: 35,
        marginLeft: 30,
    },
    positionUserName: {
        marginTop: 35,
        marginLeft: 8,
    },
    positionIcon: {
        marginTop: 35,
        marginLeft: 170,
    },
    username: {
        fontFamily: 'roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffff',
        fontFamily: 'Roboto'
    }
});

export default TopBar;