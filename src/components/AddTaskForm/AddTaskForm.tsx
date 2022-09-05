import { TextInput } from 'components/form/TextInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
import tw from 'twrnc';
import { Task } from 'types/Task';

type AddTaskFormProps = {
  onClose?: () => void;
  // Side effects after sending to API
  onSave?: () => void;
  task?: Task;
};

export const AddTaskForm = ({ onClose, onSave, task }: AddTaskFormProps) => {
  console.log(task);
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      id: task?.id,
      title: task?.title || '',
      description: task?.description || '',
    },
    mode: 'onChange',
  });

  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={tw`flex-1 px-4 pb-2 justify-between`}>
      <View>
        <TextInput
          name="title"
          control={control}
          placeholder="Task or chore to complete"
        />
        <TextInput
          name="description"
          control={control}
          multiline
          numberOfLines={3}
          placeholder="Description"
        />
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
            handleSubmit(submit);
            onSave?.();
          }}
        />
      </View>
    </View>
  );
};
