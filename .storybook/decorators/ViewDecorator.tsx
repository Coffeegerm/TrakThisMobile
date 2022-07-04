import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export const ViewDecorator = ({ children }: { children: React.ReactNode }) => (
  <View style={tw`flex-1 justify-center items-center`}>{children}</View>
);
