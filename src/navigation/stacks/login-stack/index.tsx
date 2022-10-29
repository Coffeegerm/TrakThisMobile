import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/Login/LoginScreen';
import SignUpScreen from 'screens/SignUp/SignUpScreen';

export type LoginStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};
const Stack = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: true, headerTitle: '' }}
      />
    </Stack.Navigator>
  );
}
