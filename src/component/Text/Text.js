import React from 'react';
import {View, Animated} from 'react-native';
import {useFadeAnime, useTranslateAnime} from '../../utilities/hooks';
import PropTypes from 'prop-types';

export default function Text(props) {
  const {children} = props;

  const opacity = useFadeAnime();
  const translateX = useTranslateAnime();
  return (
    <View>
      <Animated.Text
        style={[props.style, {opacity, transform: [{translateX}]}]}>
        {children}
      </Animated.Text>
    </View>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
};
