export const userInfoSelector = (state) => state.UserReducer.details;
export const colorSafeAreaSelector = (state) => state.UiReducer.safeAreaColor;
export const forgotPasswordSelector = (state) => state.ForogtPasswordReducer;
export const isAppLoadingSelector = (state) => state.UiReducer.isLoading;
//popup
export const isModalVisableSelector = (state) =>
  state.PopupReducer.isModalVisable;
export const modalTitleSelector = (state) => state.PopupReducer.modalTile;
export const modalContentSelector = (state) => state.PopupReducer.modalContent;
export const modalIsClosebleSelector = (state) => state.PopupReducer.closable;
export const modalOkBtnSelector = (state) => state.PopupReducer.okBtnAction;
export const modalCancelBtnSelector = (state) =>
  state.PopupReducer.cancelBtnAction;

export const dataTabsSelector = (state) => state.HomeReducer.dataTabs;
export const selectedTabSelector = (state) =>
  state.HomeReducer.selectedCategorie;
