import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {COLORS} from '../../utilities/constans';

const SliderSettings = () => {
  return (
    <View>
      <Icon name="sliders" color={COLORS.graydark} size={22} />
    </View>
  );
};

export default SliderSettings;
