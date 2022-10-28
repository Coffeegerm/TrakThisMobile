import { GlobalProvider } from 'contexts/Global';
import { RootNavigation } from 'navigation/RootNavigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

if (__DEV__) {
  import('./services/reactotron').then(() =>
    console.log('Reactotron Configured')
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <RootNavigation />
      </GlobalProvider>
    </SafeAreaProvider>
  );
};

export default App;
