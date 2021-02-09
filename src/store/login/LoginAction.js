import * as TYPES from './LoginTypes';

export const signinAction = (userInfo) => ({
    type: TYPES.SIGNIN,
    payload: {...userInfo}
})
export const signupAction = (userInfo) => ({
    type: TYPES.SIGNUP,
    payload: {...userInfo}
})
export const signoutAction = (userInfo) => ({
    type: TYPES.SIGNIN,
    payload: {...userInfo}
})