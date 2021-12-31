import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';
import {NavigateScreenProps} from '../../navigation/StackNavigation';
import COLORS from '../../constants/colors';

const Stories = () => {
  const navigation = useNavigation<NavigateScreenProps>();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../../assets/images/userProfile.jpg'),
    },
    {
      id: 0,
      name: 'Hasan',
      image: require('../../../assets/images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../../../assets/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'GAVIN_0',
      image: require('../../../assets/images/profile3.jpg'),
    },
    {
      id: 0,
      name: 'the_groot',
      image: require('../../../assets/images/profile4.jpg'),
    },
    {
      id: 0,
      name: 'noProBleM',
      image: require('../../../assets/images/profile5.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {name: data.name, image: data.image})
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: COLORS.BLUE,
                      backgroundColor: COLORS.WHITE,
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: COLORS.WHITE,
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: COLORS.PROFILE_OUTLINE,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: COLORS.ORANGE,
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id === 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
