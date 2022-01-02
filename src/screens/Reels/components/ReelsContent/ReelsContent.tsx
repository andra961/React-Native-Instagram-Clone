import React, {useState} from 'react';
import {View, Text} from 'react-native';
import COLORS from '../../../../constants/colors';

import {videoData} from '../../../../constants/videos';

import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from '../SingleReel';

const ReelsContent = () => {
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const handleChangeIndexValue = ({index}: {index: number}) => {
    setcurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={videoData}
      onChangeIndex={handleChangeIndexValue}
      vertical={true}
      renderItem={({item, index}: any) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item: any, index: number) => index.toString()}
    />
  );
};

export default ReelsContent;
