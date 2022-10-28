import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { GameScreen } from 'screens/Game';
import { GamesScreen } from 'screens/Games';

type GamesStackParamList = {
  GamesScreen: undefined;
  Game: {
    id: number;
    name: string;
  };
};
export type GamesScreenProps = NativeStackScreenProps<
  GamesStackParamList,
  'GamesScreen'
>;
export type GameScreenProps = NativeStackScreenProps<
  GamesStackParamList,
  'Game'
>;

const GamesStackNavigator = createNativeStackNavigator<GamesStackParamList>();

export function GamesStack() {
  return (
    <GamesStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GamesStackNavigator.Screen name="GamesScreen" component={GamesScreen} />
      <GamesStackNavigator.Screen
        name="Game"
        component={GameScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.name,
        })}
      />
    </GamesStackNavigator.Navigator>
  );
}
