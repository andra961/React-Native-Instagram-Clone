import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import {
  NavigateScreenProps,
  StatusScreenProp,
} from '../../navigation/StackNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/colors';

import styles from './styles';

const Status = () => {
  const route = useRoute<StatusScreenProp>();
  const {
    params: {name, image},
  } = route;

  const navigation = useNavigation<NavigateScreenProps>();

  const [progress, setProgress] = useState<Animated.Value>(
    new Animated.Value(0),
  );

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.statusContainer}>
      <StatusBar backgroundColor={COLORS.BLACK} barStyle={'light-content'} />
      <View style={styles.statusBarContainer}>
        <Animated.View
          style={[
            styles.statusBarFilled,
            {
              width: progressAnimation,
            },
          ]}></Animated.View>
      </View>
      <View style={styles.statusHeaderContainer}>
        <View style={styles.userImgContainer}>
          <Image source={image} style={styles.userImage} />
        </View>
        <View style={styles.headerInfoContainer}>
          <Text style={styles.userName}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="close"
              style={{fontSize: 20, color: COLORS.WHITE, opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.backGroundImage} />
      <View style={styles.sendMsgContainer}>
        <TextInput
          placeholder="send message"
          placeholderTextColor={COLORS.WHITE}
          style={styles.msgInput}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="navigation"
            style={{fontSize: 30, color: COLORS.WHITE}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
