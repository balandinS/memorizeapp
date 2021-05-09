import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../utilities/constans';
type Props = {
  title: string,
  subtitle: string,
};
const Title = (props: Props) => {
  const {title, subtitle} = props;
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{title}</Text>
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
    fontSize: 26,
    color: COLORS.black,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.graydark,
  },
});
