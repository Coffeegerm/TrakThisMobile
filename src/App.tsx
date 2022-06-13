import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from 'navigation';
import React from 'react';
import Storybook from '../.storybook/Storybook';

const App = () => {
  const [showStorybook, setShowStorybook] = React.useState(false);
  if (__DEV__) {
    const DevMenu = require('react-native-dev-menu');
    DevMenu.addItem('Toggle Storybook', () => setShowStorybook(val => !val));
  }
  return (
    <NavigationContainer>
      {showStorybook ? <Storybook /> : <RootStack />}
    </NavigationContainer>
  );
};

export default App;
