import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';

const Cadastre = ({navigation}) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <TopBar navigation={navigation} />
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
            onPress={() => navigation.navigate('Profile')}
            contentStyle={styles.button}
            labelStyle={styles.buttonLabel}
            theme={theme}>
            Cadastrar
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
  btnCadastrarOrientacao: {
    marginTop: 50,
  },
});

export default Cadastre;
