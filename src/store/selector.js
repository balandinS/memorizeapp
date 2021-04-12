export const userInfoSelector = (state) => state.UserReducer
export const colorSafeAreaSelector = (state) => state.UiReducer.safeAreaColor
export const forgotPasswordSelector = (state => state.ForogtPasswordReducer)
export const isAppLoadingSelector  = (state => state.UiReducer.isLoading)