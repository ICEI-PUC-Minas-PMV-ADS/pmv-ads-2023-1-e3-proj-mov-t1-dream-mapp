import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from "react-native";


import deskImage from '../assets/imgs/desk.jpg'

export default class DreamPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={deskImage} style={styles.background}>
                    <View style={styles.titlebar}>
                        <Text style={styles.title}>Vizualização de Objetivos</Text>
                        <Text style={styles.subtitle}>Encontre abaixo seus objetivos</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasklist}>
                    <Text>Tarefa #01</Text>
                    <Text>Tarefa #02</Text>
                    <Text>Tarefa #03</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 2,
    },
    tasklist: {
        flex: 8
    },
    titlebar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: '#6b3fa0',
        fontSize: 34,
        marginLeft: 20,
        marginBottom: 20

    },
    subtitle: {
        color: '#FFF',
        fontSize: 25,
        marginLeft: 20,
        marginBottom: 20

    }
})
