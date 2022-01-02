import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';

import Feather from 'react-native-vector-icons/Feather';
import ReelsContent from './components/ReelsContent';

const Reels = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: COLORS.BLACK,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.WHITE}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: COLORS.WHITE}} />
      </View>
      <ReelsContent />
    </View>
  );
};

export default Reels;
