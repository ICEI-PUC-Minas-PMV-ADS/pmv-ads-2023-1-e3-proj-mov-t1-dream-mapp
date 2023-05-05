import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';

const CadastreObjetivo = ({ navigation }) => {

    const [Dojetivo, setDobjetivo] = useState('');
    const [Ddescricao, setDdescricao] = useState('');

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
        <TopBar navigation={navigation} />
        <View style={styles.content}>
            <View style={styles.form}>
              <Headline style={styles.title}> Cadastre-se </Headline>
              <TextInput
                mode="outlined"
                label="Título Objetivo"
                value={Dojetivo}
                onChangeText={(text) => setDobjetivo(text)}
                theme={theme}
                style={styles.input}/>
              <TextInput
                mode="outlined"
                label="Título Descrição"
                value={Ddescricao}
                onChangeText={(text) => setDdescricao(text)}
                theme={theme}
                style={styles.input}/>
              <View style={styles.btnCadastrarObjOrientacao}>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('Home')}
                  contentStyle={styles.button}
                  labelStyle={styles.buttonLabel}
                  theme={theme}>
                  Cadastrar Objetivo
                </Button>
              </View>
            </View>
        </View>
        <MenuGlobal navigation={navigation} />
        </View>
        
       </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    marginTop: 25,
    borderRadius: 30,
  },
  btnCadastrarObjOrientacao: {
    marginTop: 50,
  },
  button: {
    height: 50,
    borderRadius: 30,
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default CadastreObjetivo;
