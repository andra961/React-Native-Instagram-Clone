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

const FriendsProfile = () => {
  const {
    params: {name, profileImage, follow, post, followers, following},
  }: any = useRoute<FriendsProfileScreenProp>();

  const navigation = useNavigation<NavigateScreenProps>();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" style={{fontSize: 20, color: 'black'}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}>
            {name}
          </Text>
          <Feather
            name="more-vertical"
            style={{fontSize: 20, color: 'black'}}
          />
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
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Suggested for you
      </Text>
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
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#DEDEDE',
                        borderRadius: 2,
                        borderWidth: 0.5,
                      }}>
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={{position: 'absolute', top: 10, right: 10}}>
                        <AntDesign
                          name="close"
                          style={{fontSize: 20, color: 'black', opacity: 0.5}}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {data.name}
                      </Text>
                      <Text style={{fontSize: 12}}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(prev => !prev)}
                        style={{width: '80%', paddingVertical: 10}}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? undefined : '#3493D9',
                            borderWidth: isFollow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: isFollow ? 'black' : 'white'}}>
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
