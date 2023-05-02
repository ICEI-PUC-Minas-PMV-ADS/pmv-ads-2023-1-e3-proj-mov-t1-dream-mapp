import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import theme from '../components/DefaultTheme';

const Cadastre = ({navigation}) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.form}>

        <Headline style={styles.title}> Cadastre-se </Headline>

            <TextInput
            mode="outlined"
            label="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
            theme={theme}
            style={styles.input}/>

             <TextInput
            mode="outlined"
            label="Sobrenome"
            value={sobrenome}
            onChangeText={(text) => setSobrenome(text)}
            theme={theme}
            style={styles.input}/>

            <TextInput
            mode="outlined"
            label="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            theme={theme}
            style={styles.input}/>

            <TextInput
            mode="outlined"
            label="Senha"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            right={<TextInput.Icon name="lock" />}
            theme={theme}
            style={styles.input}/>

            <View style={styles.btnCadastrarOrientacao} >
            <Button
            mode="contained"
            onPress={() => navigation.navigate('Home')}
            contentStyle={styles.button}
            labelStyle={styles.buttonLabel}
            theme={theme}>
            Cadastrar
            </Button>
            </View>    

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 170,
    marginBottom: 10,
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
  btnCadastrarOrientacao: {
    marginTop: 50,
  },
});

export default Cadastre;
