import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { Button, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';

export function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const openBottomSheet = () => bottomSheetRef.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <ActionButton onPress={() => openBottomSheet()} />

      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text>Hello</Text>
          <Button title="Close" onPress={closeBottomSheet} />
        </View>
      </BottomSheet>
    </View>
  );
}
