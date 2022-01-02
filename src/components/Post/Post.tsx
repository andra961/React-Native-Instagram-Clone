import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../../constants/colors';
import styles from './styles';

import postInfo from '../../constants/posts';

const Post = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState<boolean>(data.isLiked);
        return (
          <View key={index} style={styles.postContainer}>
            <View style={styles.postHeaderContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={data.postPersonImage} style={styles.posterImg} />
                <Text style={styles.postTitle}>{data.postTitle}</Text>
              </View>
              <Feather name="more-vertical" style={{fontSize: 20}} />
            </View>

            <Image source={data.postImage} style={styles.postImg} />
            <View style={styles.actionContainer}>
              <View style={styles.imageAndTitleContainer}>
                <TouchableOpacity onPress={() => setLike(prev => !prev)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? COLORS.RED : COLORS.BLACK,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name={'ios-chatbubble-outline'}
                    style={{
                      fontSize: 20,
                      paddingRight: 10,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name={'navigation'}
                    style={{
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{fontSize: 20}} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.likes}>
                Liked by {like ? 'you and ' : ''}
                {like ? data.likes : data.likes} others
              </Text>
              <Text style={styles.description}>
                If enjoy the video Please like and Subscribe :)
              </Text>
              <Text style={styles.viewComments}>View all comments</Text>
              <View style={styles.addCommentContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={data.postPersonImage} style={styles.userImg} />
                  <TextInput
                    placeholder="Add a comment"
                    style={styles.addCommentInput}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: COLORS.GREEN, marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{
                      fontSize: 15,
                      color: COLORS.ORANGE,
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: COLORS.RED}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
