/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Login from './screens/Login';
import Register from './screens/Register';
import PersonalInfo from './screens/PersonalInfo';
import Home from './screens/Home';
import Activity from './screens/Activity';
import Signin from './screens/Signin';
import AuthMiddleware from './screens/AuthMiddleware';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
    <<<<<<< HEAD
        <Stack.Screen
          name="AuthMiddleware"
          component={AuthMiddleware}
          options={{headerShown: false}}
        />
        <Stack.Screen
=======
        {/* <Stack.Screen
>>>>>>> a6aa2b82cb8b39f7c48d870bdafe172176124e1a
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ headerShown: false }}
        /> */}
 options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


