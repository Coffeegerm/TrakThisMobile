import BottomSheet from '@gorhom/bottom-sheet';
import { AddTaskForm } from 'components/AddTaskForm/AddTaskForm';
import { Screen } from 'components/Screen';
import { useTasks } from 'hooks/useTasks';
import React, { useRef, useState } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import tw from 'twrnc';
import { Task } from 'types/Task';

export const TasksScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['50%'];

  const [task, setTask] = useState<Task | undefined>(undefined);

  const { tasks } = useTasks();

  const openBottomSheet = () => bottomSheetRef.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  return (
    <Screen style={tw`flex-1 px-3`}>
      <Text style={tw`text-xl`}>Tasks</Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={tw`px-3 py-3`}
              onPress={() => {
                setTask(item);
                openBottomSheet();
              }}>
              <Text style={tw`text-4.5`}>{item.title}</Text>
              <Text style={tw`text-3`}>{item.description}</Text>
            </Pressable>
          );
        }}
      />

      <ActionButton onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        keyboardBehavior="interactive">
        <AddTaskForm onClose={closeBottomSheet} task={task} />
      </BottomSheet>
    </Screen>
  );
};
