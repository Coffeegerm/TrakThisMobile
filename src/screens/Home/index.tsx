import React from 'react';
import { Home } from 'views/Home';
import { HomeScreenProvider } from './HomeContext';

export const HomeScreen = () => {
  return (
    <HomeScreenProvider>
      <Home />
    </HomeScreenProvider>
  );
};
