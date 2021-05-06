import {put, all, takeLatest} from 'redux-saga/effects';
import * as TYPES from './ForgotPasswordTypes';
import {startLoadingAction, endLoadingAction} from './ForgotPasswordAction';
function* forgotPassword1(params) {
  console.log('action --> ', params);
  yield put({
    type: TYPES.SAVE_USER_DETAILS,
    payload: params.payload,
  });
}
export default function* forgotPassword() {
  yield all([takeLatest(TYPES.STEP1_COMPLETE, forgotPassword1)]);
}
