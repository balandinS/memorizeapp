export const userInfoSelector = (state) => state.UserReducer
export const colorSafeAreaSelector = (state) => state.UiReducer.safeAreaColor
export const forgotPasswordSelector = (state) => state.ForogtPasswordReducer
export const isAppLoadingSelector  = (state) => state.UiReducer.isLoading
export const isModalVisableSelector = (state)=>  state.PopupReducer.isModalVisable
export const modalTitleSelector = (state) =>  state.PopupReducer.modalTile
export const modalContentSelector = (state) =>  state.PopupReducer.modalContent
export const modalIsClosebleSelector = (state) => state.PopupReducer.closable