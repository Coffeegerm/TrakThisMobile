import { Screen } from 'components/Screen';
import React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';

export const GroceriesList = () => {
  return (
    <Screen style={tw`flex-1 px-3`}>
      <Text style={tw`text-xl`}>Groceries</Text>
    </Screen>
  );
};
