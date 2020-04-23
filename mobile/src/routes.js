import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Detail from './pages/Detail';
import Solutions from './pages/Solutions';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name="Solução" component={Solutions} />
        <AppStack.Screen name="Detalhes" component={Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}