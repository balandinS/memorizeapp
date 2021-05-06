//@flow
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;
export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
