import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Logo from '../components/Logo';
import theme from '../components/DefaultTheme';

const Login = ({navigation}) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Logo />

        <Headline style={styles.title}> Login </Headline>

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            right={<TextInput.Icon name="lock" />}
            theme={theme}
            style={styles.input}
          />
          <View style={styles.btnEntrarOrientacao} >
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Home')}
            contentStyle={styles.button}
            labelStyle={styles.buttonLabel}
            theme={theme}>
            Entrar
          </Button>
          </View>
          <View style={styles.btnCadastrarOrientacao} >
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Cadastre')}
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
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    marginTop: 25,
    borderRadius: 30, // corrigido
  },
  btnEntrarOrientacao: {
    marginTop: 100,
  },
  btnCadastrarOrientacao: {
    marginTop: 10,
  },
});

export default Login;
