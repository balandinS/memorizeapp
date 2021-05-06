import React, {useRef} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import LottieView from 'lottie-react-native';
import {isAppLoadingSelector} from '../../store/selector';
import type {Props, InitailStyle, Opacity} from './BtnType';

//@flow
const INITAIL_STYLE_BTN: InitailStyle = {
  backgroundColor: COLORS.blackLight,
  borderRadius: 30,
  borderWidth: 1,
  borderColor: COLORS.blackLight,
};

const UIButton = (props: Props) => {
  const {
    contnet = '',
    icon,
    onPress,
    propStyle = INITAIL_STYLE_BTN,
    textColor,
    isDisable,
  } = props;

  const isLoading = useSelector(isAppLoadingSelector);
  const txtColor = useRef(textColor ? textColor : COLORS.white);
  const opacityStyle: Opacity = {
    opacity: isDisable || isLoading ? 0.5 : 1,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerButton, propStyle, opacityStyle]}
      disabled={isDisable || isLoading}>
      <View style={styles.btnCotnent}>
        {!!contnet && (
          <View style={styles.btnCotnent}>
            <Text style={[styles.text, {color: txtColor.current}]}>
              {contnet}
            </Text>

            {isLoading && (
              <View style={styles.lottieConatiner}>
                <LottieView
                  autoPlay
                  loop
                  style={styles.lottieView}
                  source={require('../../assessts/animations/loadingAnimation.json')}
                />
              </View>
            )}
          </View>
        )}
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  containerButton: {
    minHeight: 44,
    minWidth: 150,
    justifyContent: 'center',
    paddingVertical: 8,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    elevation: 0,
  },
  text: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  btnCotnent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieConatiner: {
    height: 40,
    width: 40,
  },
  lottieView: {
    flex: 1,
  },
});
