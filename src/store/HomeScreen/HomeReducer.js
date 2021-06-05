//@flow
import * as TYPES from './HomeTypes';
import type {Action} from '../StroeTypesFlow';
import {tabsValues} from './mockData';
import type {InitalState} from './HomeTyped';

const INITAIL_STATE = {
  selectedCategorie: 'Women',
  dataTabs: tabsValues,
  explorData: [],
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
