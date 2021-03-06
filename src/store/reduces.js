import {combineReducers} from 'redux';
import UiReducer from './ui/UiReducer';
import ForogtPasswordReducer from './forgotPassword/ForogtPasswordReducer';
import UserReducer from './userdata/UserReducer';
import PopupReducer from './modalPopup/popupReducer';
import HomeReducer from './HomeScreen/HomeReducer';
export default combineReducers({
  UiReducer,
  ForogtPasswordReducer,
  UserReducer,
  PopupReducer,
  HomeReducer,
});
