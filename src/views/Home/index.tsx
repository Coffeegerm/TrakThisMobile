import BottomSheet from '@gorhom/bottom-sheet';
import { TextInput } from 'components/TextInput';
import React, { useMemo, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import tw from 'twrnc';

export function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const [text, setText] = useState('');

  const openBottomSheet = () => bottomSheetRef.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Home Screen</Text>

      <ActionButton onPress={() => openBottomSheet()} />

      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={tw`flex-1 p-4 pb-8 justify-between`}>
          <Text>Hello</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Task or chore to complete"
          />
          <View style={tw`flex-row justify-around`}>
            <Button title="Close" onPress={closeBottomSheet} />
            <Button
              title="Save"
              onPress={() => {
                closeBottomSheet();
              }}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}
