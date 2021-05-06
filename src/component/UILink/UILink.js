import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../utilities/constans';
import PropTypes from 'prop-types';
const UILink = ({children}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

UILink.propTypes = {
  children: PropTypes.string.isRequired,
};
export default UILink;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 2,
    height: 50,
  },
  text: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.blackLight,
    color: COLORS.blackLight,
    fontSize: 16,
    fontWeight: '400',
  },
});
