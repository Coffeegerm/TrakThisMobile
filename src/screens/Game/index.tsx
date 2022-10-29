import { useGame } from 'hooks/useGame';
import { GameScreenProps } from 'navigation/stacks/bottom-navigation';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const GameScreen = ({ navigation, route }: GameScreenProps) => {
  const id = route.params.id;
  const { game, isLoading, isError } = useGame(id);

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <ActivityIndicator />}
      <Text>{game?.name}</Text>
    </View>
  );
};
