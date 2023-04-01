import React from 'react';
import { View, Text } from 'react-native';

import Login from './src/pages/LoginPage';

import UserProvider from './src/context/userContext';

const App = () => {
  return (
    <UserProvider>
      <Login />
    </UserProvider>
  );
};

export default App;
