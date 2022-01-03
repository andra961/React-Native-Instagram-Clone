import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const TopTabComponent = () => {
  let squares: any[] = [];
  let numberOfSquares = 4;

  for (let index = 0; index < numberOfSquares; index++) {
    squares.push(
      <View key={index}>
        <View
          style={{
            width: 136,
            height: 150,
            marginVertical: 0.5,
            backgroundColor: 'black',
            opacity: 0.1,
          }}></View>
      </View>,
    );
  }
  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  const Videos = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <TopTab.Navigator
      screenOptions={({route: any}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
      })}>
      <TopTab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            const iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';

            return (
              <Ionicons
                name={iconName}
                color={focused ? 'black' : 'grey'}
                size={22}
              />
            );
          },
        }}
        name="Posts"
        component={Posts}
      />
      <TopTab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            const iconName = focused
              ? 'ios-play-circle'
              : 'ios-play-circle-outline';

            return (
              <Ionicons
                name={iconName}
                color={focused ? 'black' : 'grey'}
                size={22}
              />
            );
          },
        }}
        name="Videos"
        component={Videos}
      />
      <TopTab.Screen
        options={{
          tabBarIcon: ({focused, color}) => {
            const iconName = focused ? 'ios-person' : 'ios-person-outline';

            return (
              <Ionicons
                name={iconName}
                color={focused ? 'black' : 'grey'}
                size={22}
              />
            );
          },
        }}
        name="Tags"
        component={Tags}
      />
    </TopTab.Navigator>
  );
};

export default TopTabComponent;
