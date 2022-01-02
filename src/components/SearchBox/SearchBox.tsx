import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/colors';

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
      }}>
      <Ionicons
        name="search"
        style={{
          fontSize: 10,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.LIGHT_GREY}
        style={{
          width: '94%',
          backgroundColor: COLORS.WHITE_2,
          borderRadius: 10,
          alignItems: 'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      />
    </View>
  );
};

export default SearchBox;
