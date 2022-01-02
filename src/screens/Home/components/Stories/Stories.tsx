import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';
import {NavigateScreenProps} from '../../../../navigation/StackNavigation';
import COLORS from '../../../../constants/colors';
import styles from './styles';

import storyInfo from '../../../../constants/stories';

const Stories = () => {
  const navigation = useNavigation<NavigateScreenProps>();

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
            <View style={styles.storyContainer}>
              {data.id == 1 ? (
                <View style={styles.addButtonContainer}>
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
              <View style={styles.userImgContainer}>
                <Image source={data.image} style={styles.userImg} />
              </View>
              <Text
                style={[
                  styles.userName,
                  {
                    opacity: data.id === 0 ? 1 : 0.5,
                  },
                ]}>
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
