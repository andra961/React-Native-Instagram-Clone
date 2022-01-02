import React, {useRef} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import COLORS from '../../../../constants/colors';

import Video from 'react-native-video';

const SingleReel = ({item, index, currentIndex}: any) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = (buffer: any) => {
    console.log('buffering', buffer);
  };
  const onError = (error: any) => {
    console.log('error', error);
  };

  return (
    <View style={{width: screenWidth, height: screenHeight}}>
      <TouchableOpacity>
        <Video
          source={item.video}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;
