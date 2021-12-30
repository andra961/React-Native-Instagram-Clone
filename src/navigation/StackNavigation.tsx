import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import {RouteProp} from '@react-navigation/native';
import Status from '../screens/Status';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  BottomTabNavigation: undefined;
  Status: {name: string; image: ImageSourcePropType};
};

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={'BottomTabNavigation'}
        component={BottomTabNavigation}
      />
      <Stack.Screen name={'Status'} component={Status} />
    </Stack.Navigator>
  );
};

export type NavigateScreenProps = NativeStackNavigationProp<RootStackParamList>;

export type StatusScreenProp = RouteProp<RootStackParamList, 'Status'>;

export default StackNavigation;
