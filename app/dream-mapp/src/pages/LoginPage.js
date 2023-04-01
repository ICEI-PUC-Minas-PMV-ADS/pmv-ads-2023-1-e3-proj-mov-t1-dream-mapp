import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Logo from '../components/Logo';

const Login = () => {
  const [text, setText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <Logo />

        <Text style={styles.title}> Login </Text>

        <TextInput
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          style={styles.button}
          mode="contained"
          buttonColor="#03a596"
          onPress={() => console.log('Pressed')}>
          Entrar
        </Button>

        <Button
          style={styles.button}
          mode="outlined"
          textColor="#FFFFFF"
          onPress={() => console.log('Pressed')}>
          Cadastrar
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#474747',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 8,
  },
});

export default Login;