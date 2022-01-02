import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import SearchBox from '../../components/SearchBox';
import SearchContent from '../../components/SearchContent';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/colors';

const Search = () => {
  const [image, setimage] = useState(null);

  const getData = (data: any) => {
    setimage(data);
  };

  console.log(Dimensions.get('window').width);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent getData={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="pluscircleo" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>

      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              backgroundColor: COLORS.WHITE,
              width: 350,
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymous_guy
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionicons name="ios-heart-outline" style={{fontSize: 26}} />
              <Ionicons
                name="ios-person-circle-outline"
                style={{fontSize: 26}}
              />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
