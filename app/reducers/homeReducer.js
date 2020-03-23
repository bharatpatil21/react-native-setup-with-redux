/* eslint-disable prettier/prettier */
/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    ocrInfo: null,
    ocrInfoLoading: false,
};

export const homeReducer = createReducer(initialState, {
  [types.GET_OCR_INFO](state, action) {
    return {
      ...state,
      ocrInfo: null,
      ocrInfoLoading: true,
    };
  },
  [types.GET_OCR_INFO_SUCCESS](state, action) {
    return { ...state,
            ocrInfo: action.ocrInfo, 
            ocrInfoLoading: false 
    };
  },
  [types.GET_OCR_INFO_FAIL](state) {
    return {
        ...state,
        ocrInfoLoading: false
    };
  },
});
