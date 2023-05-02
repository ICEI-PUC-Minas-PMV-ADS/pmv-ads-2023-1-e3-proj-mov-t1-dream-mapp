import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationContainer from './src/components/NavigationContainer';
import Navigation from './src/components/Navigation';
import theme from './src/components/DefaultTheme';

export default function App() {

  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <NavigationContainer>
    <SafeAreaProvider>
     <PaperProvider theme={theme}>
      <Navigation></Navigation>
      </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
