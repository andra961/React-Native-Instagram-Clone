import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import {
  EditProfileScreenProp,
  NavigateScreenProps,
} from '../../navigation/StackNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/colors';

import styles from './styles';

const EditProfile = () => {
  const {
    params: {name, accountName, profileImage},
  } = useRoute<EditProfileScreenProp>();

  const navigation = useNavigation<NavigateScreenProps>();

  const ToastMessage = () => {
    ToastAndroid.show('Edited Succesfully !', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={styles.editProfileText}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}>
          <Ionicons
            name="checkmark"
            style={{fontSize: 35, color: COLORS.BLUE_FOLLOW}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity>
          <Text style={styles.changePhotoText}>Change profile photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={{opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={styles.formTextInput}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>Username</Text>
          <TextInput
            placeholder="accountName"
            defaultValue={accountName}
            style={styles.formTextInput}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput placeholder="Website" style={styles.formTextInput} />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput placeholder="Bio" style={styles.formTextInput} />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.switchTo}>Switch to Professional account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.switchTo}>Personal information setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
