import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import COLORS from '../../../../constants/colors';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import Video from 'react-native-video';

import styles from './styles';

const SingleReel = ({item, index, currentIndex}: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const videoHeight =
    Dimensions.get('window').height -
    tabBarHeight -
    (StatusBar.currentHeight || 0);

  const videoRef = useRef(null);

  const onBuffer = (buffer: any) => {
    return <ActivityIndicator color={COLORS.WHITE} />;
  };
  const onError = (error: any) => {
    console.log('error', error);
  };

  const [mute, setMute] = useState<boolean>(false);

  const [like, setLike] = useState<boolean>(item.isLike);

  return (
    <View
      style={[
        styles.reelContainer,
        {
          width: screenWidth,
          height: screenHeight,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(prev => !prev)}
        style={[styles.videoWrapper, {height: videoHeight}]}>
        <Video
          source={item.video}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          paused={currentIndex === index ? false : true}
          muted={mute}
          resizeMode="cover"
          style={styles.video}
        />
        {mute ? (
          <View style={styles.muteIconWrapper}>
            <Ionicons
              name="volume-mute"
              style={{
                fontSize: 20,
                color: COLORS.WHITE,
              }}
            />
          </View>
        ) : null}
      </TouchableOpacity>

      <View style={styles.overlayContainer}>
        <TouchableOpacity style={{width: 150}}>
          <View style={styles.infoContainer}>
            <View style={styles.roundUserImgOutline}>
              <Image source={item.postProfile} style={styles.roundUserImg} />
            </View>
            <Text style={styles.reelTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.reelDescription}>{item.description}</Text>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Ionicons
            name="ios-musical-note"
            style={{color: COLORS.WHITE, fontSize: 16}}
          />
          <Text style={{color: COLORS.WHITE}}>Original Audio</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => setLike(prev => !prev)}
          style={{paddingBottom: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? COLORS.RED : COLORS.WHITE, fontSize: 25}}
          />
          <Text style={{color: COLORS.WHITE}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom: 10, margin: 0}}>
          <Ionicons
            name="ios-chatbubble-outline"
            style={{color: COLORS.WHITE, fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom: 10, margin: 0}}>
          <Ionicons
            name="paper-plane-outline"
            style={{color: COLORS.WHITE, fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom: 10, margin: 0}}>
          <Feather
            name="more-vertical"
            style={{color: COLORS.WHITE, fontSize: 25}}
          />
        </TouchableOpacity>
        <View style={styles.squareUserImgOutline}>
          <Image source={item.postProfile} style={styles.squareUserImg} />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
