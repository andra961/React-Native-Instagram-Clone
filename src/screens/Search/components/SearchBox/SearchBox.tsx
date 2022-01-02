import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../../constants/colors';

import styles from './styles';

const SearchBox = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.LIGHT_GREY}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBox;
