import * as TYPES from './popupTypes';
export const updateModalProps = (payload) => ({
  type: TYPES.UPDATE_MODAL_PROPS,
  payload,
});

export const setVisableModalAction = (payload) => ({
  type: TYPES.SET_IS_MODAL_VISIBLE,
  payload,
});
