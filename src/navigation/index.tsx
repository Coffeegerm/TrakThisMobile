import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const RootStackNavigator = createNativeStackNavigator();

export function RootStack() {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />
    </RootStackNavigator.Navigator>
  );
}
