import { GlobalProvider } from 'contexts/Global';
import { NativeBaseProvider } from 'native-base';
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
    <NativeBaseProvider>
      <SafeAreaProvider>
        <GlobalProvider>
          <RootNavigation />
        </GlobalProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
