import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAccessToken } from 'contexts/AccessToken';
import React from 'react';
import { BottomNavigation } from './BottomNavigation';
import Storybook from '../../.storybook/Storybook';

const queryClient = new QueryClient();

export const RootNavigation = () => {
  const [showStorybook, setShowStorybook] = React.useState(false);
  const accessToken = useAccessToken();
  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu');
    DevMenu.addItem('Toggle Storybook', () => setShowStorybook(val => !val));
  }

  React.useEffect(() => {
    if (!accessToken) {
      queryClient.defaultQueryOptions({
        enabled: false,
      });
    } else {
      queryClient.defaultQueryOptions({
        enabled: true,
      });
    }
  }, [accessToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {showStorybook ? <Storybook /> : <BottomNavigation />}
      </NavigationContainer>
    </QueryClientProvider>
  );
};
