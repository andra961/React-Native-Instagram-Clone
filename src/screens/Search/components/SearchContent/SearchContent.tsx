import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import searchData from '../../../../constants/searchData';

import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const separatorWidth = 2;

const imgWidth = (screenWidth - separatorWidth * 2) / 3;

const img2Width = imgWidth * 2 + separatorWidth;

const SearchContent = ({getData}: {getData: any}) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.firstRowContainer}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => getData(imageData)}
                      onPressOut={() => getData(null)}
                      style={{paddingBottom: 2}}
                      key={data.id + imgIndex}>
                      <Image
                        source={imageData}
                        style={{width: imgWidth, height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.secondRowContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: img2Width,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                        style={{paddingBottom: 2}}
                        key={data.id + imgIndex}>
                        <Image
                          source={imageData}
                          style={{width: imgWidth, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => getData(data.images[5])}
                  onPressOut={() => getData(null)}
                  style={{paddingBottom: 2}}>
                  <Image
                    source={data.images[5]}
                    style={{width: imgWidth, height: 302}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.thirdRowContainer}>
                <TouchableOpacity
                  onPressIn={() => getData(data.images[2])}
                  onPressOut={() => getData(null)}
                  style={{}}>
                  <Image
                    source={data.images[2]}
                    style={{width: img2Width, height: 302}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: imgWidth,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => getData(imageData)}
                        onPressOut={() => getData(null)}
                        style={{paddingBottom: 2}}
                        key={data.id + imgIndex}>
                        <Image
                          source={imageData}
                          style={{width: imgWidth, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
