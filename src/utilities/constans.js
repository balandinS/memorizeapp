//@flow
import type {
  Colors,
  SignupContent,
  SigninContent,
  Modals,
  ItemCarousel,
} from './Type';

export const COLORS: Colors = {
  peterriver: 'rgba(52, 152, 219,1.0)',
  white: 'white',
  clouds: 'rgba(189, 195, 199,1.0)',
  black: 'rgb(17 ,10, 8)',
  // eslint-disable-next-line no-dupe-keys
  white: 'rgb(255,255,255)',
  graywhithe: 'rgb(250, 250, 250)',
  beige: 'rgb(229, 222, 216)',
  gray: 'rgb(247,247,247)',
  blackLight: 'rgb(37, 36, 42)',
  blue: 'rgb(64, 150, 237)',
  green: 'rgb(88, 165, 92)',
  red: 'rgb(235, 51, 36)',
  graydark: 'rgb(174, 174, 174)',
  graylight: 'rgb(240, 239, 246)',
  graylightdark: 'rgb(139, 139, 143)',
  black_50: 'rgba(17 ,10, 8, .5)',
  gray_navigation: 'rgb(199, 199, 199)',
};

export const SIGNIN_SCREEN_CONTENT: SignupContent = {
  title: 'Log into \nyour account',
  description: 'Or sign in with socail account',
};

export const SIGNUP_SCREEN_CONTENT: SigninContent = {
  title: 'create \nyour account',
  description: 'Or sign in with socail account',
};

export const STEP1: string = 'step1';
export const STEP2: string = 'step2';
export const STEP3: string = 'step3';

export const MODAL_TYPES: Modals = {
  error: 'ERROR_MODAL',
  errorTwoBtn: 'ERROR_TWO_BUTTON_MODAL',
  twoBtnVer: 'TWO_VERTICAL_BUTTON_MODAL',
  twoBtnHor: 'TWO_HORIZNTAL_BUTTON_MODAL',
  oneBtnVer: 'ONE_BUTTON_MODAL',
};

export const CAROUSEL_DATA: Array<ItemCarousel> = [
  {
    title: 'Women Collection',
    text: 'Rich selection for choosing clothes',
  },
  {
    title: 'Men Collection',
    text: 'Rich selection for choosing clothes',
  },
  {
    title: 'Child Collection',
    text: 'Rich selection for choosing clothes',
  },
];
