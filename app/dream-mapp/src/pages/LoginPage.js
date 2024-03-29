import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Logo from '../components/Logo';
import theme from '../components/DefaultTheme';
import Toast, { DURATION } from 'react-native-easy-toast';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../DB/firebase';


const Login = ({ navigation }) => {
  const toastRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showToast = () => {
    toastRef.current.show('This is a toast message', DURATION.LENGTH_LONG);
  };

// ...

const handleForgotPassword = async () => {
  try {
    if (!password && (resetEmail || email)) {
      const emailToReset = resetEmail || email;
      await sendPasswordResetEmail(auth, emailToReset);
      toastRef.current.show('E-mail de redefinição de senha enviado!', DURATION.LENGTH_LONG);
    } else {
      toastRef.current.show('Preencha apenas o e-mail!', DURATION.LENGTH_LONG);
    }
  } catch (error) {
    toastRef.current.show('Erro ao enviar e-mail de redefinição de senha', DURATION.LENGTH_LONG);
  }
};


  const handleEmailLogin = async () => {
    try {
      setIsLoading(true); 

      await signInWithEmailAndPassword(auth, email, password);

      setTimeout(() => {
        setIsLoading(false); 
        navigation.navigate('Home');
      }, 1800);

    } catch (error) {
      setIsLoading(false); 
      console.log('Erro ao fazer login:', error);
      toastRef.current.show('Erro ao fazer login', DURATION.LENGTH_LONG);
    }
  };

  return (
   
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
      <Toast
        ref={toastRef}
        style={styles.toastContainer}
        textStyle={styles.toastText}
        opacity={0.7}
      />

        <Logo />

        <Headline style={styles.title}> Login </Headline>

        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Email"
            value={resetEmail ? resetEmail : email}
            onChangeText={resetEmail ? setResetEmail : setEmail}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            right={<TextInput.Icon name="lock" />}
            theme={theme}
            style={styles.input}
          />

          {isLoading ? (
            <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator style={styles.activityIndicator} size="large" color={theme.colors.primary} />
            </View>
          ) : (
          <View style={styles.btnEntrarOrientacao}>
            <Button
              mode="contained"
              onPress={handleEmailLogin}
              contentStyle={styles.button}
              labelStyle={styles.buttonLabel}
              theme={theme}
            >
              Entrar
            </Button>
          </View>
          )}

          <View style={styles.btnCadastrarOrientacao}>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('Cadastre')}
              contentStyle={styles.button}
              labelStyle={styles.buttonLabel}
              theme={theme}
            >
              Cadastrar
            </Button>
          </View>
          <View style={styles.btnForgotPassword}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingBottom: 100,
    paddingLeft: 30,
    paddingRight: 30,
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
    borderRadius: 30,
  },
  activityIndicatorContainer: {
    marginTop: 58,
    marginBottom:46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEntrarOrientacao: {
    marginTop: 100,
  },
  btnCadastrarOrientacao: {
    marginTop: 10,
  },
  btnForgotPassword: {
    marginTop: 10,
    color: theme.colors.primary,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  toastContainer: {
    position: 'absolute',
    bottom: -135,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
