import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import SearchBox from './components/SearchBox';
import SearchContent from './components/SearchContent';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/colors';

import styles from './styles';

const Search = () => {
  const [image, setimage] = useState(null);

  const getData = (data: any) => {
    setimage(data);
  };

  return (
    <View style={styles.rootContanier}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent getData={getData} />
        <TouchableOpacity style={styles.plusButtonWrapper}>
          <AntDesign name="pluscircleo" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>

      {image ? (
        <View style={styles.overlayImageContainer}>
          <StatusBar
            backgroundColor={COLORS.DARK_GREY}
            barStyle="dark-content"
          />
          <View style={styles.overlayImageCard}>
            <View style={styles.overlayImageHeader}>
              <Image source={image} style={styles.overlayUserProfileImg} />
              <Text style={styles.overlayUserName}>the_anonymous_guy</Text>
            </View>
            <Image source={image} style={styles.overlayImage} />
            <View style={styles.overlayActionContainer}>
              <Ionicons name="ios-heart-outline" style={{fontSize: 26}} />
              <Ionicons
                name="ios-person-circle-outline"
                style={{fontSize: 26}}
              />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
