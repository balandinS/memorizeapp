import { all, fork } from 'redux-saga/effects'
import forgotPassword from './forgotPassword/ForgotPasswordSaga'
export function* rootSaga() {
   yield all([
       fork(forgotPassword)
   ])
}