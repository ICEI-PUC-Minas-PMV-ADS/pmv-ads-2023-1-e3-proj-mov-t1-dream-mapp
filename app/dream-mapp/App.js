import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfilePage from './src/pages/ProfilePage';

export default function App() {

  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

 
  return (

    <ProfilePage />
  );
};

