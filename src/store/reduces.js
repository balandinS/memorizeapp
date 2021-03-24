import { combineReducers } from 'redux'
import LoginReducer from './login/LoginReducer'
import UiReducer from './ui/UiReducer'
import ForogtPasswordReducer from './forgotPassword/ForogtPasswordReducer'
export default combineReducers({
    LoginReducer,
    UiReducer,
    ForogtPasswordReducer
})