import React from 'react';
import { TextInputProps, TextInput as TInput } from 'react-native';
import tw from 'twrnc';

export const TextInput = (props: TextInputProps) => (
  <TInput style={tw`w-full bg-gray-100 rounded p-2 mr-4`} {...props} />
);
