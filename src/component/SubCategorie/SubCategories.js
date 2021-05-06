import React from 'react';
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import {verticalScale} from '../../utilities/screenUtilities';

const SubCategories = ({subcategorie}) => {
  return (
    <TouchableOpacity style={styles.conatiner}>
      <ImageBackground style={styles.image} source={subcategorie.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{subcategorie.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
SubCategories.propTypes = {
  subcategorie: PropTypes.object.isRequired,
};
export default SubCategories;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: COLORS.black_50,
    height: verticalScale(30),
    marginBottom: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 18,
  },
});
