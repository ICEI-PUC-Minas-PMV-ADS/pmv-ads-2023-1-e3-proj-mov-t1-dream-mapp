import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfilePage from './src/pages/ProfilePage';

import NavigationContainer from './src/components/NavigationContainer';
import Navigation from './src/components/Navigation';
import theme from './src/components/DefaultTheme';

export default function App() {

<<<<<<< HEAD
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
=======
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

 
  return (
>>>>>>> feature/profile-page

    <ProfilePage />
  );
};

