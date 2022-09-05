import React from 'react';
import {
  Text,
  TextInput as TInput,
  TextInputProps as TInputProps,
  View,
} from 'react-native';
import tw from 'twrnc';

export type TextInputProps = TInputProps & {
  small?: boolean;
  large?: boolean;
  label?: string;
};

export const TextInput = (props: TextInputProps) => (
  <React.Fragment>
    {props.label && <Text>{props.label}</Text>}
    <View style={tw`pt-3`}>
      <TInput style={tw`w-full bg-gray-100 rounded p-2 mr-4`} {...props} />
    </View>
  </React.Fragment>
);
