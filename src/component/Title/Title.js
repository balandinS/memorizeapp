import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../utilities/constans';
type Props = {
  title: string,
  subtitle: string,
  size: number,
};
const Title = (props: Props) => {
  const {title, subtitle, size = 26} = props;
  const fontSize = {fontSize: size};
  return (
    <View style={styles.conatiner}>
      <Text style={StyleSheet.flatten([styles.title, fontSize])}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingBottom: 15,
  },
  title: {
    color: COLORS.black,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.graydark,
  },
});
