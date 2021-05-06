import forgotPassword from './ForgotPasswordSaga';
import {
  START_LOADING,
  END_LOADING,
  STEP1_COMPLETE,
} from './ForgotPasswordTypes';

export const startLoadingAction = () => ({
  type: START_LOADING,
});

export const endLoadingAction = () => ({
  type: END_LOADING,
});

export const forgotPasswordStep1 = (params) => ({
  type: STEP1_COMPLETE,
  payload: params,
});
