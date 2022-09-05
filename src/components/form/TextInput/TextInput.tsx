import { TextInputProps, TextInput as TI } from 'components/TextInput';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type FormTextInputProps = {
  name: string;
  control: Control<any>;
} & TextInputProps;
export const TextInput = (props: FormTextInputProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => {
        console.log(value);
        return (
          <TI
            onChange={onChange}
            defaultValue={typeof value === 'number' ? value?.toString() : value}
            {...props}
          />
        );
      }}
    />
  );
};
