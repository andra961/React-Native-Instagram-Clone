import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import COLORS from '../../../../constants/colors';

const screenWidth = Dimensions.get('window').width;

console.log(screenWidth);

const separatorWidth = 2;

const squareWidth = (screenWidth - separatorWidth * 2) / 3;

const TopTab = createMaterialTopTabNavigator();

const TopTabComponent = () => {
  let squares: any[] = [];
  let numberOfSquares = 4;

  for (let index = 0; index < numberOfSquares; index++) {
    squares.push(
      <View key={index}>
        <View style={[styles.square, {width: squareWidth}]}></View>
      </View>,
    );
  }

  const EmptySquares = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.squaresGrid}>{squares}</View>
      </ScrollView>
    );
  };

  const Posts = () => <EmptySquares />;

  const Videos = () => <EmptySquares />;

  const Tags = () => <EmptySquares />;

  return (
    <TopTab.Navigator
      screenOptions={({route: any}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.BLACK,
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
