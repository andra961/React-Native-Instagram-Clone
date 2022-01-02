import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stories from './components/Stories';
import Post from '../Search/components/Post';
import COLORS from '../../constants/colors';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.headerBackground}>
      <StatusBar
        backgroundColor={COLORS.WHITE}
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.headerContainer}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text style={styles.instagramText}>Instagram</Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <TouchableOpacity style={styles.refreshButtonWrapper}>
          <Ionicons
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
