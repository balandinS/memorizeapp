import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../utilities/constans';
import {useColorSafeArea} from '../../utilities/hooks';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TopHeader = (props) => {
  useColorSafeArea(COLORS.white);

  const toggleDrawer = () => {
    props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleDrawer}
        style={styles.hamburgerContainer}>
        <LottieView
          loop={false}
          autoPlay
          style={styles.hamburger}
          source={require('../../assessts/animations/hamburgerAnimation.json')}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon name="heart-o" size={21} color={COLORS.black} />
        <Icon name="shopping-bag" size={21} color={COLORS.black} />
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  hamburgerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 50,
  },
  hamburger: {
    height: 60,
    width: 60,
  },
  iconContainer: {
    flexDirection: 'row',
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
    paddingHorizontal: 10,
  },
});
