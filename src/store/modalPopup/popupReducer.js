import * as TYPES from './popupTypes';
import {MODAL_TYPES} from '../../utilities/constans';
import {NOOP} from '../../utilities/utilities';
const INITAIL_STATE = {
  isModalVisable: false,
  modalTile: '',
  modalContent: '',
  errMsg: '',
  closable: false,
  okBtnLabel: 'Ok, yes sure !',
  cancelBtnLabel: 'Cancel',
  modalType: MODAL_TYPES.oneBtnVer,
  okBtnAction: NOOP,
  cancelBtnAction: NOOP,
};

export default (state = INITAIL_STATE, action) => {
  const {type = '', payload = {}} = action;
  switch (type) {
    case TYPES.SET_IS_MODAL_VISIBLE: {
      if (payload === false) {
        return {...state, isModalVisable: false};
      }
      return {
        ...state,
        isModalVisable: payload,
      };
    }

    case TYPES.UPDATE_MODAL_PROPS: {
      return {...state, ...payload};
    }
    case TYPES.RESET_MODAL_PROPS: {
      return {...INITAIL_STATE};
    }
    default:
      return state;
  }
};
