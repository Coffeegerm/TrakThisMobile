import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { TextInput } from './TextInput';

const TextInputMeta: ComponentMeta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    onChangeText: { action: 'onChangeText' },
  },
  args: {},
};

export default TextInputMeta;

type TextInputStory = ComponentStory<typeof TextInput>;

export const Basic: TextInputStory = args => <TextInput {...args} />;
