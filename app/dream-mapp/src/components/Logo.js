import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = () => {
  return <Image style={styles.image} source={require('../assets/Logo_DM_horizontal_apc.png')} />
};

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginBottom: 100,
    justifyContent: 'center',
    width: 350,
    height: 80,
    resizeMode: 'contain',
  },
}); 

export default Logo;