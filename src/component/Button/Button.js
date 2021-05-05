import React, {useRef} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux'
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import LottieView from 'lottie-react-native';
import { isAppLoadingSelector } from '../../store/selector'
import PropTypes from 'prop-types'

const INITAIL_STYLE_BTN = {
  backgroundColor: COLORS.blackLight,
  borderRadius: 30,
  borderWidth: 1,
  borderColor: COLORS.blackLight,
};

const UIButton = ({
  contnet = '',
  icon,
  onPress,
  propStyle = INITAIL_STYLE_BTN,
  textColor,
  isDisable,
}) => {

  const isLoading = useSelector(isAppLoadingSelector)
  const txtColor = useRef(!!textColor ? textColor : COLORS.white);
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerButton, propStyle, {opacity: isDisable || isLoading ? .5 : 1}]}
      disabled={isDisable || isLoading}>
      <View style={styles.btnCotnent}>
        {!!contnet && (
            <View style={styles.btnCotnent}>
                <Text style={[styles.text, {color: txtColor.current}]}>{contnet}</Text>
                {isLoading && (
                    <View style={{height: 40, width: 40}}>
                       <LottieView autoPlay loop style={{flex: 1}} source={require('../../assessts/animations/loadingAnimation.json')}/>
                    </View>
                )}
               
            </View>   
        )}
        {icon && icon}
        
      </View>
    </TouchableOpacity>
  );
};

UIButton.propTypes = {
   contnet: PropTypes.string,
   onPress: PropTypes.func.isRequired,
   textColor: PropTypes.string,
   icon: PropTypes.elementType,
   propStyle: PropTypes.object,
   isDisable: PropTypes.bool

}

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
    alignItems: 'center'
  },
});
