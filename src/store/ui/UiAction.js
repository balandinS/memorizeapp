import * as TYPES from './UiTypes'
export const fillSafeAreaColor = color => {
   return {
      type: TYPES.FILL_COLOR_SAFEAREA,
      payload: color
   }
}