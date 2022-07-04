import BottomSheet from '@gorhom/bottom-sheet';
import { AddTaskForm } from 'components/AddTaskForm/AddTaskForm';
import { Screen } from 'components/Screen';
import React, { useRef } from 'react';
import { FlatList, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { ScrollView } from 'react-native-gesture-handler';
import { useTasksScreen } from 'screens/Tasks/TasksContext';
import tw from 'twrnc';

export function Tasks() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['50%'];

  const { tasks, isError, isLoading } = useTasksScreen();

  const openBottomSheet = () => bottomSheetRef.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  return (
    <Screen style={tw`flex-1 px-3`}>
      <Text style={tw`text-xl`}>Tasks</Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={tw`px-3 py-3`}>
              <Text style={tw`text-4.5`}>{item.title}</Text>
              <Text style={tw`text-3`}>{item.description}</Text>
            </View>
          );
        }}
      />

      <ActionButton onPress={openBottomSheet} />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <ScrollView style={tw`flex-1`}>
          <AddTaskForm onClose={closeBottomSheet} />
        </ScrollView>
      </BottomSheet>
    </Screen>
  );
}
