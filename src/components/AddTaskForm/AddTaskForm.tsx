import { TextInput } from 'components/TextInput';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import tw from 'twrnc';

type AddTaskFormProps = {
  onClose?: () => void;
  onSave?: () => void;
};

export const AddTaskForm = ({ onClose, onSave }: AddTaskFormProps) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  return (
    <React.Fragment>
      <View style={tw`flex-1 p-4 pb-8 justify-between`}>
        <View>
          <Text style={tw`py-5 text-4`}>Create a Task</Text>

          <View style={tw`pt-3`}>
            <TextInput
              label="Title"
              onChangeText={setText}
              value={text}
              placeholder="Task or chore to complete"
            />
          </View>

          <Text style={tw`pt-3`}>Description</Text>
          <View style={tw`py-4`}>
            <TextInput
              multiline
              numberOfLines={3}
              onChangeText={setDescription}
              value={description}
              placeholder="Description"
            />
          </View>
        </View>

        <View style={tw`flex-row justify-around`}>
          <Button
            title="Close"
            onPress={() => {
              onClose?.();
            }}
          />
          <Button
            title="Save"
            onPress={() => {
              onSave?.();
            }}
          />
        </View>
      </View>
    </React.Fragment>
  );
};
