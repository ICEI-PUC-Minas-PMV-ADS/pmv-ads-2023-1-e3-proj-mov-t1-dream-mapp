import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {
  return <Image style={styles.image} source={require('../assets/logo.png')} />
};

const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    justifyContent: 'center',
  },
}); 

export default Logo;









