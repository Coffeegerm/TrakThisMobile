import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Profile } from 'screens/Profile';

type ProfileStackNavigatorScreens = {
  ProfileScreen: undefined;
};

const ProfileStackNavigator =
  createNativeStackNavigator<ProfileStackNavigatorScreens>();

export function ProfileStack() {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStackNavigator.Screen name="ProfileScreen" component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
}
