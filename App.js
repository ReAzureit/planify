import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Onboarding, Signin} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
