import * as TYPES from './UserTypes';
import {call, takeLatest, put} from 'redux-saga/effects';
import {
  signinAction
} from './UserAction.js';
import { logoutFaceBook, accessToken, profileRequest } from '../../utilities/facebookTools'
import { startLoadingAppAction, endLoadingAppAction } from '../ui/UiAction'
const loginSocailFacebook = function* () {
  yield put(startLoadingAppAction());
  const response  = yield call(accessToken);
  const data = yield call(
    async () => await profileRequest(response),
  );
  yield put(signinAction(data));
  yield put(endLoadingAppAction());
};

const logoutSocailFacebook = function* () {
  yield call(logoutFaceBook);
  yield put({
    type: TYPES.SIGNOUT,
  });
};

export default function* userSaga() {
  yield takeLatest(TYPES.FACEBOOK_LOGIN, loginSocailFacebook);
  yield takeLatest(TYPES.FACEBOOK_LOGOUT, logoutSocailFacebook);
}
