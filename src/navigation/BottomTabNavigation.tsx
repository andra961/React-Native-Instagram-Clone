import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reels from '../screens/Reels';
import Activity from '../screens/Activity';
import Search from '../screens/Search';
import COLORS from '../constants/colors';
import {Touchable, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const computeSize = (focused: boolean, size: number) => {
  return focused ? size + 8 : size + 2;
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 50},
        tabBarActiveTintColor: COLORS.BLACK,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'home-sharp' : 'home-outline';

            return (
              <Ionicons
                name={iconName}
                size={computeSize(focused, size)}
                color={color}
              />
            );
          },

          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'search' : 'ios-search-outline';

            return (
              <Ionicons
                name={iconName}
                size={computeSize(focused, size)}
                color={color}
              />
            );
          },
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        name={'Search'}
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';

            return (
              <Ionicons
                name={iconName}
                size={computeSize(focused, size)}
                color={color}
              />
            );
          },
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        name={'Reels'}
        component={Reels}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'ios-heart' : 'ios-heart-outline';

            return (
              <Ionicons
                name={iconName}
                size={computeSize(focused, size)}
                color={color}
              />
            );
          },
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        name={'Activity'}
        component={Activity}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-outline';

            return (
              <Ionicons
                name={iconName}
                size={computeSize(focused, size)}
                color={color}
              />
            );
          },
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        name={'Profile'}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
