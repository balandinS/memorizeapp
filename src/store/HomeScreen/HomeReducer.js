//@flow
import * as TYPES from './HomeTypes';
import type {Action} from '../StroeTypesFlow';
import {tabsValues} from './mockData';
import type {InitalState} from './HomeTyped';
import storage from '@react-native-firebase/storage';
const reference = storage().ref('explore/summer.png');
const INITAIL_STATE = {
  selectedCategorie: 'Women',
  dataTabs: tabsValues,
  explorData: [
    {
      name: 'Summer',
      image: reference,
    },
    {
      name: 'Winter',
      image: 2,
    },
  ],
};

export default (
  state: InitalState = INITAIL_STATE,
  action: Action,
): InitalState => {
  const {type, payload} = action;

  switch (type) {
    case TYPES.FETCH_CATEGORIES:
      return {
        ...state,
        selectedCategorie: payload,
      };

    default:
      return state;
  }
};
