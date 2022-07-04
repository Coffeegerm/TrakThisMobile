import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { WithChildren } from 'types/WithChildren';

export function Screen(props: WithChildren & SafeAreaViewProps) {
  return (
    <SafeAreaView edges={['top', 'bottom']} {...props}>
      {props.children}
    </SafeAreaView>
  );
}
