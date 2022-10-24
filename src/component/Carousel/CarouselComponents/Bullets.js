import React from 'react';
import {StyleSheet, View} from 'react-native';
import {verticalScale, scale} from '../../../utilities/screenUtilities';
import {COLORS} from '../../../utilities/constans';
import {PropsBullet} from '../Types';

const Bullets = (props: PropsBullet) => {
  const {interval, items} = props;
  return (
    <View style={styles.dotContainer}>
      {items.map((item, index) => {
        return (
          <View
            key={index}
            style={index === interval - 1 ? selectedDot : styles.dot}
          />
        );
      })}
    </View>
  );
};

export default Bullets;

const styles = StyleSheet.create({
  dotContainer: {
    height: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dot: {
    height: verticalScale(6),
    width: scale(6),
    borderRadius: 7 / 2,
    backgroundColor: COLORS.gray,
    margin: 5,
    opacity: 0.4,
  },
  selectedDot: {
    backgroundColor: COLORS.white,
    transform: [{scale: 1.5}],
    opacity: 0.7,
  },
});
const selectedDot = StyleSheet.flatten([styles.dot, styles.selectedDot]);
