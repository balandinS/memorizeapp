import { all, fork } from 'redux-saga/effects'
import forgotPassword from './forgotPassword/ForgotPasswordSaga'
import userSaga from './userdata/UserSaga'
export function* rootSaga() {
   yield all([
       fork(forgotPassword),
       fork(userSaga)
   ])
}