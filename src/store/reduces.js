import { combineReducers } from 'redux'
import LoginReducer from './login/LoginReducer'
import UiReducer from './ui/UiReducer'
export default combineReducers({
    LoginReducer,
    UiReducer
})