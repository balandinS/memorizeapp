import { COLORS } from '../../utilities/constans'
import * as TYPE from './UiTypes'
const INITAIL_STATE = {
   safeAreaColor: COLORS.beige
}



export default (state=INITAIL_STATE, action)=> {
    switch (action.type) {
        case TYPE.FILL_COLOR_SAFEAREA:
            return { ...state, safeAreaColor: action.payload}
    
        default:
           return state
    }
}