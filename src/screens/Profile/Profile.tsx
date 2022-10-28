import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export function Profile() {
  return (
    <View style={tw`flex-1 px-3`}>
      <Text style={tw`text-xl`}>Profile</Text>
    </View>
  );
}
