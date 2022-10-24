//@flow
import {Dimensions} from 'react-native';
type Window = {
  width: number,
  height: number,
};

export const window: Window = Dimensions.get('window');
const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

export const scale = (size: number): number =>
  (window.width / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (window.height / guidelineBaseHeight) * size;
