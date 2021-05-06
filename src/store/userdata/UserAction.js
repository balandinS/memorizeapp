import * as TYPES from './UserTypes';

export const signinAction = (userInfo) => ({
  type: TYPES.SIGNIN,
  payload: userInfo,
});
export const signupAction = (userInfo) => ({
  type: TYPES.SIGNUP,
  payload: userInfo,
});
export const signoutAction = (userInfo) => ({
  type: TYPES.SIGNIN,
  payload: userInfo,
});

export const loginSocailFacebookAction = () => ({
  type: TYPES.FACEBOOK_LOGIN,
});

export const logoutSocailFacebookAction = () => ({
  type: TYPES.FACEBOOK_LOGOUT,
});

export const loginSocailGoogleAction = () => ({
  type: SOCIAL_LOGIN_GOOGLE,
});

export const logoutSocailGoogleAction = () => ({
  type: SOCAIL_LOGOUT_GOOGLE,
});

export const startInitializing = () => ({
  type: TYPES.START_INITAILIZING,
});

export const endInitializing = () => ({
  type: TYPES.END_INITAILIZING,
});

export const signupWithEmailAndPasswordAction = (email, password) => ({
  type: TYPES.EMAIL_SIGNUP,
  payload: {email, password},
});

export const signinWithEmailAndPasswordAction = (email, password) => ({
  type: TYPES.EMAIL_LOGIN,
  payload: {email, password},
});

export const resetUserDitailsAction = () => ({
  type: TYPES.CLEAR_USER_DETAILS,
});

export const setMetaMessaging = (meta) => ({
  type: TYPES.META_NOTIFI,
  payload: meta,
});
