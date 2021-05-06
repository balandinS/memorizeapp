import * as TYPES from './UiTypes';
export const fillSafeAreaColor = (color) => {
  return {
    type: TYPES.FILL_COLOR_SAFEAREA,
    payload: color,
  };
};
export const startLoadingAppAction = () => ({
  type: TYPES.APP_START_LOADING,
});

export const endLoadingAppAction = () => ({
  type: TYPES.APP_END_LOADING,
});
