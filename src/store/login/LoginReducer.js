import {SIGNUP, SIGNOUT, SIGNIN, EXIST_USER} from './LoginTypes';
import { REHYDRATE } from 'redux-persist';
const intailState = {
  userToken: null,
  userName: '',
  avatar: '',
  isLogin: false,
  signWith: ''
};

export default (state = intailState, action) => {
  switch (action.type) {

    case REHYDRATE:
      return {
       ...action?.payload?.LoginReducer 
      };
    case SIGNIN:
      return {
        userToken: action.payload.id,
        userName: action.payload.name,
        avatar: action.payload.avatar,
        signWith: action.payload.signWith,
        isLogin: true,
      }
    case SIGNUP:
      return {
        userToken: action.id,
        userName: action.name,
        avatar: action.avatar,
        signWith: action.signWith,
        isLogin: true,
      }
    case SIGNOUT:
      return {...intailState};
    default:
      return {...state};
  }
};
