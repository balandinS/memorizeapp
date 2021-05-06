import {COLORS} from '../../utilities/constans';
import * as TYPE from './UiTypes';
const INITAIL_STATE = {
  safeAreaColor: COLORS.beige,
  isLoading: false,
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case TYPE.FILL_COLOR_SAFEAREA:
      return {...state, safeAreaColor: action.payload};
    case TYPE.APP_START_LOADING:
      return {...state, isLoading: true};
    case TYPE.APP_END_LOADING:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
