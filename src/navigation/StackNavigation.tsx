import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import {RouteProp} from '@react-navigation/native';
import Status from '../screens/Status';
import {ImageSourcePropType} from 'react-native';
import FriendsProfile from '../screens/FriendsProfile';
import EditProfile from '../screens/EditProfile';

export type RootStackParamList = {
  BottomTabNavigation: undefined;
  Status: {name: string; image: ImageSourcePropType};
  FriendsProfile: {
    name: string;
    profileImage: ImageSourcePropType;
    follow: boolean;
    post: number;
    followers: number;
    following: number;
  };
  EditProfile: {
    name: string;
    accountName: string;
    profileImage: ImageSourcePropType;
  };
};

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen
        name={'BottomTabNavigation'}
        component={BottomTabNavigation}
      />
      <Stack.Screen name={'Status'} component={Status} />
      <Stack.Screen name={'FriendsProfile'} component={FriendsProfile} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
    </Stack.Navigator>
  );
};

export type NavigateScreenProps = NativeStackNavigationProp<RootStackParamList>;

export type StatusScreenProp = RouteProp<RootStackParamList, 'Status'>;

export type FriendsProfileScreenProp = RouteProp<
  RootStackParamList,
  'FriendsProfile'
>;

export type EditProfileScreenProp = RouteProp<
  RootStackParamList,
  'EditProfile'
>;

export default StackNavigation;
