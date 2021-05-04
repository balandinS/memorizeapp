import * as TYPES from './HomeTypes';


export const  fetchCategoriesAction = (data) => ({
    type: TYPES.FETCH_CATEGORIES,
    payload: data
})