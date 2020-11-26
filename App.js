import React from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import {HomeStack} from './src/navigations';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
