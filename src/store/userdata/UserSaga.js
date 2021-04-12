import * as TYPES from './UserTypes';
import {call, takeLatest, put} from 'redux-saga/effects';
import {
  signinAction,
  startInitializing,
  endInitializing
} from './UserAction.js';
import { logoutFaceBook, accessToken } from '../../utilities/facebookTools'
import { startLoadingAppAction, endLoadingAppAction } from '../ui/UiAction'
import { createUserWithEmail } from '../../utilities/utilities'
const loginSocailFacebook = function* () {
  yield put(startLoadingAppAction());
  const {user}  = yield call(accessToken);
  yield put(signinAction(user));
  yield put(endLoadingAppAction());
};

const logoutSocailFacebook = function* () {
  yield call(logoutFaceBook);
  yield put({
    type: TYPES.SIGNOUT,
  });
};

const sinupWithEmail =function* ({type, payload}) {
    yield put(startLoadingAppAction())
    yield put(startInitializing())
    try {
      const user = yield call(createUserWithEmail,payload.email, payload.password,)
      yield put(signinAction(user));
    } catch (error) {
      console.log( 'error ---> ', error)
    } finally{
      yield put(endInitializing())
      yield put(endLoadingAppAction())
    } 
}
export default function* userSaga() {
  yield takeLatest(TYPES.FACEBOOK_LOGIN, loginSocailFacebook);
  yield takeLatest(TYPES.FACEBOOK_LOGOUT, logoutSocailFacebook);
  yield takeLatest(TYPES.EMAIL_SIGNUP, sinupWithEmail)
}
