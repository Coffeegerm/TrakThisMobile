import { IInputProps, Input as RNInput, Text } from 'native-base';
import React from 'react';
import {
  ControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import { TextStyle, View, ViewStyle } from 'react-native';

type ControlledInputProps = IInputProps &
  Pick<ControllerProps, 'rules' | 'name'> & {
    containerStyles?: ViewStyle;
    labelStyles?: TextStyle;
    inputContainerStyles?: ViewStyle;
    label?: string;
  };

const ControlledInput = (props: ControlledInputProps) => {
  const { name, label, rules, defaultValue, ...inputProps } = props;

  const { field, fieldState, formState } = useController({
    name,
    rules,
    defaultValue,
  });

  return (
    <View style={[props.containerStyles]}>
      {label && (
        <Text style={[props.labelStyles, { paddingLeft: 8 }]}>{label}</Text>
      )}
      <View style={[props.inputContainerStyles]}>
        <RNInput
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          style={[inputProps.style]}
          {...inputProps}
        />
      </View>
    </View>
  );
};

export const Input = (props: ControlledInputProps) => {
  const formContext = useFormContext();
  const { name } = props;
  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }
  return <ControlledInput {...props} />;
};
