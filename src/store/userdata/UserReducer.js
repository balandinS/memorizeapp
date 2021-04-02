import {
  SIGNUP,
  SIGNOUT,
  SIGNIN,
  EXIST_USER,
  SOCAIL_SIGNUP,
  STARTED_SIGNUP,
  ENDED_SIGNIN,
} from './UserTypes';
import {REHYDRATE} from 'redux-persist';
const intailState = {
  name: '',
  id: '',
  avatar: '',
  isLogin: ''
};

export default (state = intailState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        name: action.payload.id,
        id: action.payload.name,
        avatar: action.payload.avatar,
        isLogin: true,
      };
    case SIGNUP:
      return {
        userToken: action.id,
        userName: action.name,
        avatar: action.avatar,
        signWith: action.signWith,
        isLogin: true,
      };
    case SIGNOUT:
      return {...intailState};
    case REHYDRATE:
      if(action?.payload?.UserReducer){
        return {
          ...action.payload.UserReducer,
        };
      } else{
        return state
      }
    default:
      return state;
  }
};
