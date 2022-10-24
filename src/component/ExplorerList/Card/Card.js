// @flow
import React from 'react';
import {StyleSheet, ImageBackground, View, Animated} from 'react-native';
import Title from '../../Title';
import {verticalScale, window} from '../../../utilities/screenUtilities';
import {COLORS} from '../../../utilities/constans';
type Props = {
  title: string,
  subtitle: string,
  image?: string,
};
const Card = (props: Props) => {
  const startValue = React.useRef(new Animated.Value(-window.width)).current;
  const endValue = React.useRef(window.width).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.spring(startValue, {
        toValue: endValue,
        useNativeDriver: true,
        tension: -20,
      }),
      {iterations: 1000},
    ).start();
  }, [startValue, endValue]);
  if (true) {
    return (
      <View style={styles.sceleton}>
        <Animated.View
          style={[
            styles.indecator,
            {
              transform: [{translateX: startValue}],
            },
          ]}
        />
      </View>
    );
  }
  return (
    <ImageBackground
      source={
        props.image
          ? props.image
          : require('../../../assessts/images/subcategories_bags.jpg')
      }
      style={styles.container}>
      <View style={styles.containerContent}>
        <Title title={props.title} subtitle={props.subtitle} size={26} />
      </View>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(300),
    backgroundColor: COLORS.graylight,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerContent: {
    height: 100,
    alignItems: 'center',
  },
  sceleton: {
    height: verticalScale(300),
    backgroundColor: COLORS.graydark,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  indecator: {
    height: '100%',
    width: 250,
    shadowOffset: {
      width: 3,
      height: -3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 200,
    backgroundColor: COLORS.gray_30,
  },
});
