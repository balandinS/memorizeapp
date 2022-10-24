import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {verticalScale} from '../../../utilities/screenUtilities';
import {widthScreen} from '../../../utilities/utilities';
import {COLORS} from '../../../utilities/constans';
import type {PropsItem} from '../Types';

const ItemCarousel = (props: PropsItem) => {
  return (
    <View style={styles.carouselItem}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default ItemCarousel;

const styles = StyleSheet.create({
  carouselItem: {
    height: verticalScale(200),
    width: widthScreen,
  },
  textContainer: {
    height: verticalScale(170),
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
});
