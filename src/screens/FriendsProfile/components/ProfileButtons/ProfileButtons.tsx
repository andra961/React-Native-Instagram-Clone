import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, ImageSourcePropType, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const ProfileButtons = () => {
  const [follow, setFollow] = useState<boolean>(false);

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={() => setFollow(prev => !prev)}
        style={{width: '42%'}}>
        <View
          style={[
            styles.followWrapper,
            {
              backgroundColor: follow ? undefined : '#3493D9',
              borderWidth: follow ? 1 : 0,
            },
          ]}>
          <Text style={{color: follow ? 'black' : 'white'}}>
            {follow ? 'Following' : 'Follow'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageWrapper}>
        <Text>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropDownWrapper}>
        <Feather name="chevron-down" style={{fontSize: 20, color: 'black'}} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButtons;
