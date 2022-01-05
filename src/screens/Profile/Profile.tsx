import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ProfileBody from '../../components/ProfileBody';
import ProfileButtons from '../FriendsProfile/components/ProfileButtons';

import Entypo from 'react-native-vector-icons/Entypo';
import TopTabComponent from './components/TopTabComponent';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigateScreenProps} from '../../navigation/StackNavigation';

const Profile = () => {
  let circuls = [];
  let numberOfCircles = 10;

  for (let index = 0; index <= numberOfCircles; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <TouchableOpacity style={styles.plusCircle}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyCircles}></View>
        )}
      </View>,
    );
  }

  const navigation = useNavigation<NavigateScreenProps>();

  return (
    <View style={styles.rootContainer}>
      <View style={{padding: 10}}>
        <ProfileBody
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../../assets/images/userProfile.jpg')}
          followers="3.6M"
          following="35"
          post="458"
        />

        <TouchableOpacity
          onPress={() =>
            navigation.push('EditProfile', {
              name: 'Mr Peobody',
              accountName: 'mr_peobody',
              profileImage: require('../../../assets/images/userProfile.jpg'),
            })
          }
          style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.storyHiglightText}>Story Highlights</Text>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.circleScroll}>
          {circuls}
        </ScrollView>
      </View>

      <TopTabComponent />
    </View>
  );
};

export default Profile;
