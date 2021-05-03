import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import img from '../../assessts/images/headerImagejpg.jpg';
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import Carousel from '../Carousel'
const HeaderWithImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} style={{height: 700}} source={img} fadeDuration={2}>
          <Carousel itemsPerInterval={1}/>
      </ImageBackground>
    </View>
  );
};

export default HeaderWithImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  textContainer: {
    height: 200,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
});
