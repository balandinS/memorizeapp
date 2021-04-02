import * as TYPES from './LoginTypes';

export const signinAction = (userInfo) => ({
    type: TYPES.SIGNIN,
    payload: userInfo
})
export const signupAction = (userInfo) => ({
    type: TYPES.SIGNUP,
    payload: userInfo
})
export const signoutAction = (userInfo) => ({
    type: TYPES.SIGNIN,
    payload: userInfo
})

export const loginSocailFacebookAction = () => ({
    type: TYPES.SOCIAL_LOGIN_FACEBOOK,
})

export const logoutSocailFacebookAction = () => ({
    type: TYPES.SOCAIL_LOGOUT_FACEBOOK,
})

export const loginSocailGoogleAction = () => ({
    type: SOCIAL_LOGIN_GOOGLE,
})

export const logoutSocailGoogleAction = () => ({
    type: SOCAIL_LOGOUT_GOOGLE
})
