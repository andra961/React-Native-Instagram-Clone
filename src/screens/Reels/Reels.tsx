import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import COLORS from '../../constants/colors';

import Feather from 'react-native-vector-icons/Feather';
import ReelsContent from './components/ReelsContent';

import styles from './styles';

const Reels = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View
      style={[
        styles.rootContainer,
        {width: screenWidth, height: screenHeight},
      ]}>
      <View style={styles.headerContainer}>
        <Text style={styles.reelsTitle}>Reels</Text>
        <TouchableOpacity>
          <Feather name="camera" style={{fontSize: 25, color: COLORS.WHITE}} />
        </TouchableOpacity>
      </View>
      <ReelsContent />
    </View>
  );
};

export default Reels;
