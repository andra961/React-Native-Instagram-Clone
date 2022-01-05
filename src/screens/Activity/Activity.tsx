import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import COLORS from '../../constants/colors';

import {friends} from '../../constants/friends';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NavigateScreenProps} from '../../navigation/StackNavigation';

import styles from './styles';

const Activity = () => {
  const navigation = useNavigation<NavigateScreenProps>();

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.activityText}>Activity</Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={styles.thisWeekText}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {friends.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('FriendsProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }
                key={index}>
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text> Started following you</Text>
        </View>
        <Text style={styles.earlierText}>Earlier</Text>
        {friends.slice(3, 6).map((data, index) => {
          const [follow, setFollow] = useState<boolean>(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <View style={styles.mightKnowContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('FriendsProfile', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                  style={styles.mightKnowTouchable}>
                  <Image
                    source={data.profileImage}
                    style={styles.mightKnowImg}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                    you might know, is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(prev => !prev)}
                  style={{width: follow ? 72 : 68}}>
                  <View
                    style={[
                      styles.followButton,
                      {
                        backgroundColor: follow
                          ? undefined
                          : COLORS.BLUE_FOLLOW,
                        borderWidth: follow ? 1 : 0,
                        borderColor: follow ? COLORS.WHITE_3 : undefined,
                      },
                    ]}>
                    <Text style={{color: follow ? COLORS.BLACK : COLORS.WHITE}}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={styles.suggestionText}>Suggestion for you</Text>
        {friends.slice(6, 12).map((data, index) => {
          const [follow, setFollow] = useState<boolean>(data.follow);
          const [close, setClose] = useState<boolean>(false);

          return (
            <View key={index}>
              {close ? null : (
                <View style={styles.suggestionContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push('FriendsProfile', {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: data.follow,
                        post: data.posts,
                        followers: data.followers,
                        following: data.following,
                      })
                    }
                    style={styles.suggestionTouchable}>
                    <Image
                      source={data.profileImage}
                      style={styles.suggestionImg}
                    />
                    <View style={{width: '100%'}}>
                      <Text style={styles.suggestionName}>{data.name}</Text>
                      <Text style={styles.suggestionAccountName}>
                        {data.accountName}
                      </Text>
                      <Text style={styles.suggestedForYouText}>
                        Suggested for you
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setFollow(prev => !prev)}
                        style={{
                          width: follow ? 90 : 68,
                        }}>
                        <View
                          style={[
                            styles.followButton,
                            {
                              backgroundColor: follow
                                ? undefined
                                : COLORS.BLUE_FOLLOW,
                              borderWidth: follow ? 1 : 0,
                              borderColor: follow ? COLORS.WHITE_3 : undefined,
                            },
                          ]}>
                          <Text
                            style={{
                              color: follow ? COLORS.BLACK : COLORS.WHITE,
                            }}>
                            {follow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollow(prev => !prev)}
                          style={{width: follow ? 90 : 68}}>
                          <View
                            style={[
                              styles.followButton,
                              {
                                backgroundColor: follow
                                  ? undefined
                                  : COLORS.BLUE_FOLLOW,
                                borderWidth: follow ? 1 : 0,
                                borderColor: follow
                                  ? COLORS.WHITE_3
                                  : undefined,
                              },
                            ]}>
                            <Text
                              style={{
                                color: follow ? COLORS.BLACK : COLORS.WHITE,
                              }}>
                              {follow ? 'Following' : 'Follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setClose(true)}
                          style={styles.touchableCloseIcon}>
                          <AntDesign
                            name="close"
                            style={{
                              fontSize: 14,
                              color: COLORS.BLACK,
                              opacity: 0.8,
                            }}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <TouchableOpacity style={{padding: 20}}>
          <Text style={styles.seeAllSuggestionText}>See all Suggestions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Activity;
