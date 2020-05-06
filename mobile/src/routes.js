import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Detail from './pages/Detail';
import Solutions from './pages/Solutions';
import Login from './pages/Login';

const AppStack = createStackNavigator();
//   /**  <AppStack.Screen name="Login" component={Login} /> */
export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Solução" component={Solutions} />
        <AppStack.Screen name="Detalhes" component={Detail} />
     
      </AppStack.Navigator>

    </NavigationContainer>
  );
}