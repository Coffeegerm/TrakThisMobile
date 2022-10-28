import { FlashList } from '@shopify/flash-list';
import { useGames } from 'hooks/useGames';
import { GamesScreenProps } from 'navigation/stacks';
import React from 'react';
import { Pressable, RefreshControl, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export const GamesScreen = ({ navigation }: GamesScreenProps) => {
  const { games, isLoading, isError, refetch, fetchNextPage, isRefetching } =
    useGames();

  return (
    <SafeAreaView style={tw`flex-1 px-2`} edges={['top']}>
      <FlashList
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        data={games}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={tw`border rounded-md my-1 p-2`}
              onPress={() => {
                navigation.navigate('Game', { id: item.id, name: item.name });
              }}>
              <Text style={tw`text-4`}>{item.name}</Text>
              <Text style={tw`text-3`}>{item.summary}</Text>
            </Pressable>
          );
        }}
        onEndReached={() => fetchNextPage()}
      />
    </SafeAreaView>
  );
};
