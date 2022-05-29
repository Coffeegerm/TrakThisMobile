import React from 'react';
import { Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <ActionButton onPress={() => console.log('he')} />
    </View>
  );
}
