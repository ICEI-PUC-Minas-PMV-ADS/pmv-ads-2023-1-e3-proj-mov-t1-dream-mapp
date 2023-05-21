import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4A59E3',
    secondary: '#542EFF',
    placeholder: '#4A59E3',
    text: '#4A59E3',
    background: '#fff',
    button: '#4A59E3',
    color: '#4A59E3',
    buttonText: '#fff',
    borderColor: '#4A59E3',
  },
  roundness: 10,
  fonts: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
  },
  input: {
    outlined: {
      backgroundColor: '#fff',
      borderColor: '#4A59E3',
      placeholder: '#4A59E3',
      borderRadius: 30,
      borderWidth: 2,
      color: '#4A59E3',
      fontSize: 16,
      fontWeight: 'normal',
      padding: 12,
    },
  },
  button: {
    contained: {
      backgroundColor: '#4A59E3',
      borderRadius: 30,
      color: '#4A59E3',
    },
    outlined: {
      backgroundColor: '#fff',
      borderColor: '#4A59E3',
      borderRadius: 30,
      borderWidth: 2,
      color: '#4A59E3',
    },
    labelStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: 'Roboto',
    },
  },
};

export default theme;
