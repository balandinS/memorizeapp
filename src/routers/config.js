import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {COLORS} from '../utilities/constans';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {goBack} from './rootNavigation';

export const FadeInOutAnimation = {
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    };
  },
};

export const signupOptionNavigate = {
  headerStyle: {
    backgroundColor: COLORS.beige,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  },
  headerTitle: '',
  headerLeft: (props) => (
    <TouchableOpacity style={styles.singup} onPress={goBack}>
      <Icon name="long-arrow-left" size={30} color={COLORS.blackLight} />
    </TouchableOpacity>
  ),
};

export const forgotPasswordOptionNavigate = {
  headerStyle: {
    backgroundColor: COLORS.white,
    height: 60,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  },
  headerTitle: '',
  headerLeft: (props) => (
    <TouchableOpacity style={styles.singup} onPress={goBack}>
      <Icon name="chevron-left" size={23} color={COLORS.blackLight} />
    </TouchableOpacity>
  ),
};

export const barStyleTab = {
   backgroundColor: COLORS.white,
   height: 54
};
const styles = StyleSheet.create({
  singup: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
