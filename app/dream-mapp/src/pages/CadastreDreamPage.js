import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import { IconButton, MD3Colors, Menu, TextInput } from 'react-native-paper';
import Dream from '../components/Dream';
import MenuGlobal from '../components/MenuGlobal';

const CadastreDreamPage = () => {

    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <TopBar></TopBar>
            <IconButton
                style={styles.backButton}
                icon="keyboard-backspace"
                iconColor="#47525E"
                size={36}
                onPress={() => console.log('Pressed')}
            />
            <TextInput
                style={{width: "80%", backgroundColor: '#fff'}}
                label="Título"
                value={text}
                onChangeText={text => setText(text)}
                underlineColor='red'
                placeholder='Título do objetivo'
            />
            <Text style={{
                marginTop: 40,
                fontSize: 28,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                width: "80%"
            }}>Metas</Text>
            <View style={{flex: 1, width: '100%', padding: 20}}>
                <Dream title="Descrição da meta" description="Restam 32% da meta para finalizar." style={styles.dream}></Dream>
                <Dream title="Descrição da meta" description="Restam 32% da meta para finalizar." style={styles.dream}></Dream>
                <Dream title="Descrição da meta" description="Restam 32% da meta para finalizar." style={styles.dream}></Dream>
            </View>
            <MenuGlobal></MenuGlobal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
    },
    backButton: {
        alignSelf: "flex-start"
    },
    dream: {
        marginBottom: 10
    }
});


export default CadastreDreamPage;