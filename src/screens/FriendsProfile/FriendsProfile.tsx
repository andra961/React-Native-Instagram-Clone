import React, {useState} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {
  FriendsProfileScreenProp,
  NavigateScreenProps,
} from '../../navigation/StackNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileBody from '../../components/ProfileBody';
import ProfileButtons from './components/ProfileButtons';

import {friends} from '../../constants/friends';
import COLORS from '../../constants/colors';

import styles from './styles';

const FriendsProfile = () => {
  const {
    params: {name, profileImage, follow, post, followers, following},
  }: any = useRoute<FriendsProfileScreenProp>();

  const navigation = useNavigation<NavigateScreenProps>();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            style={{fontSize: 20, color: COLORS.BLACK}}
          />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <Text style={styles.headerNameText}>{name}</Text>
          <TouchableOpacity>
            <Feather
              name="more-vertical"
              style={{fontSize: 20, color: COLORS.BLACK}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons />
      <Text style={styles.suggestionText}>Suggested for you</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 10}}>
        {name === FriendsProfile.name
          ? null
          : friends.map((data, index) => {
              const [isFollow, setIsFollow] = useState<boolean>(false);
              const [close, setClose] = useState<boolean>(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View style={styles.friendContainer}>
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={styles.closeButtonWrapper}>
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: COLORS.BLACK,
                            opacity: 0.5,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={styles.friendImg}
                      />
                      <Text style={styles.friendName}>{data.name}</Text>
                      <Text style={styles.friendAccountName}>
                        {data.accountName}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(prev => !prev)}
                        style={styles.followButtonWrapper}>
                        <View
                          style={[
                            styles.followButton,
                            {
                              backgroundColor: isFollow
                                ? undefined
                                : COLORS.BLUE_FOLLOW,
                            },
                          ]}>
                          <Text
                            style={{
                              color: isFollow ? COLORS.BLACK : COLORS.WHITE,
                            }}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default FriendsProfile;
