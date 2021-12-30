import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reels from '../screens/Reels';
import Activity from '../screens/Activity';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {height: 50},
        tabBarActiveTintColor: 'black',
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'home-sharp' : 'home-outline';

            size = focused ? size + 8 : size + 2;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'search' : 'ios-search-outline';

            size = focused ? size + 8 : size + 2;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
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

            size = focused ? size + 8 : size + 2;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name={'Reels'}
        component={Reels}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'ios-heart' : 'ios-heart-outline';

            size = focused ? size + 8 : size + 2;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
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

            size = focused ? size + 8 : size + 2;

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
        name={'Profile'}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
