import * as TYPES from './ForgotPasswordTypes';

const INITAIL_STATE = {
  isLoading: false,
  isCorrectOtp: false,
  email: '',
  phone: '',
  iaUpatded: false,
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case TYPES.START_LOADING:
      return {...state, isLoading: true};
    case TYPES.END_LOADING:
      return {...state, isLoading: false};
    
    case TYPES.SAVE_USER_DETAILS:
      console.log('reducer --> ', action);
      return {
        ...state,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    case TYPES.STEP2_COMPLETE:
      return {...state, isCorrectOtp: action.payload};
    case TYPES.STEP3_COMPLETE:
      return {...state, iaUpatded: action.payload};
    default:
      return state;
  }
};
