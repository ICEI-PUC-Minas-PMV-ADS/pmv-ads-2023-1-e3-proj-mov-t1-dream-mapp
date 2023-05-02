import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CadastrePage from '../pages/CadastrePage';
// import ProfilePage from './src/pages/ProfilePage';
// import CadastrePage from '.src/pages/CadastrePage';
// import CadastreDreamPage from './src/pages/CadastreDreamPage';
// import DreamPage from '.src/pages/DreamPage';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Cadastre" component={CadastrePage} />
      <Stack.Screen name="Home" component={HomePage} />
      
      {/* <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Cadastre" component={CadastrePage} /> */}
      {/* <Stack.Screen name="CadastreDream" component={CadastreDreamPage} />
      <Stack.Screen name="DreamPage" component={DreamPage} /> */}
     
    </Stack.Navigator>
  );
}

export default Navigation;