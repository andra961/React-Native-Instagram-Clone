import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/colors';

import styles from './styles';

const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}: any) => {
  return (
    <View>
      {accountName ? (
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftSide}>
            <Text style={styles.headerAccountName}>{accountName}</Text>
            <TouchableOpacity>
              <Feather
                name="chevron-down"
                style={{
                  fontSize: 20,
                  color: COLORS.BLACK,
                  paddingHorizontal: 5,
                  opacity: 0.5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerRightSide}>
            <TouchableOpacity>
              <Feather
                name="plus-square"
                style={{
                  fontSize: 25,
                  color: COLORS.BLACK,
                  paddingHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" style={{fontSize: 25}} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View style={styles.infoRow}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.postText}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.followersText}>{followers}</Text>
          <Text>Followers</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.followingText}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;
