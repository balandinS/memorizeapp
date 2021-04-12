import {
  SIGNUP,
  SIGNOUT,
  SIGNIN,
  START_INITAILIZING,
  END_INITAILIZING
} from './UserTypes';
import {REHYDRATE} from 'redux-persist';
const intailState = {
  isLogin: false,
  initializing: false,
  details: {}
};

export default (state = intailState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isLogin: true ,
        details: {...action.payload}
      };
    case SIGNUP:
      return {
        ...state,
        isLogin: true ,
        details: {...action.payload}
      };
    case SIGNOUT:
      return {...intailState};
    case START_INITAILIZING: 
      return {
        ...state,
        intailState: true
      }
      case START_INITAILIZING: 
      return {
        ...state,
        intailState: true
      }
      case END_INITAILIZING: 
      return {
        ...state,
        intailState: false
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
