import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BottomNavigation } from './BottomNavigation';
import Storybook from '../../.storybook/Storybook';

const queryClient = new QueryClient();

export const RootNavigation = () => {
  const [showStorybook, setShowStorybook] = React.useState(false);
  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu');
    DevMenu.addItem('Toggle Storybook', () => setShowStorybook(val => !val));
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {showStorybook ? <Storybook /> : <BottomNavigation />}
      </NavigationContainer>
    </QueryClientProvider>
  );
};
