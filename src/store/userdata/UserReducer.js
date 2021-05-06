import {
  SIGNUP,
  SIGNOUT,
  SIGNIN,
  START_INITAILIZING,
  END_INITAILIZING,
  CLEAR_USER_DETAILS,
  META_NOTIFI,
} from './UserTypes';
import {REHYDRATE} from 'redux-persist';
const intailState = {
  isLogin: false,
  initializing: false,
  details: {},
  metaNotifi: {},
  notification: {},
};

export default (state = intailState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isLogin: true,
        details: {...action.payload},
      };
    case SIGNUP:
      return {
        ...state,
        isLogin: true,
        details: {...action.payload},
      };
    case SIGNOUT:
      return {...intailState};
    case START_INITAILIZING:
      return {
        ...state,
        intailState: true,
      };
    case START_INITAILIZING:
      return {
        ...state,
        intailState: true,
      };
    case END_INITAILIZING:
      return {
        ...state,
        intailState: false,
      };
    case META_NOTIFI: {
      return {
        ...state,
        metaNotifi: action.payload,
      };
    }
    case CLEAR_USER_DETAILS: {
      return {...intailState};
    }
    // case REHYDRATE:
    //   console.log('persist');
    //   if(action?.payload?.UserReducer){
    //     return {
    //       ...action.payload.UserReducer,
    //     };
    //   } else{
    //     return state
    //   }
    default:
      return state;
  }
};
