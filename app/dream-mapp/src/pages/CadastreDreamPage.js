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
        <TopBar navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.form}>

            <Headline style={styles.title}> Cadastro de Objetivos </Headline>

            <TextInput
              mode="outlined"
              label="Título Objetivo"
              value={Dojetivo}
              onChangeText={(text) => setDobjetivo(text)}
              theme={theme}
              style={styles.input}/>

            <TextInput
              mode="outlined"
              label="Descrição Objetivo"
              value={Ddescricao}
              onChangeText={(text) => setDdescricao(text)}
              theme={theme}
              style={styles.input}/>

              <TextInput
              mode="outlined"
              label="Título da Meta"
              value={Dojetivo}
              onChangeText={(text) => setDobjetivo(text)}
              theme={theme}
              style={styles.input}/>

            <TextInput
              mode="outlined"
              label="Descrição Meta"
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
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
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
});

export default CadastreObjetivo;
