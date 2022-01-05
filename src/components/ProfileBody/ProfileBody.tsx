import React from 'react';
import {View, Text, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

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
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View style={styles.headerRightSide}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather name="menu" style={{fontSize: 25}} />
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
