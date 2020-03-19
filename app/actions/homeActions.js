import * as types from './types';
import * as navigationActions from './navigationActions';
import axios from 'axios';
import ApiConstants from '../api/ApiConstants';

export const uploadInvoiceImage = (data, history) => dispatch => {
  dispatch({ type: types.GET_OCR_INFO});
  axios
    .post(`${ApiConstants.BASE_URL}/production`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      dispatch(getOcrData());
    })
    .catch(error => {
        dispatch({ type: types.GET_OCR_INFO_FAIL});   
      // handleError(error);
    });
};

export const getOcrData = (data, history) => dispatch => {
  axios
    .get(`${ApiConstants.BASE_URL}/ocr}`)
    .then(response => {
      dispatch({
        type: types.GET_OCR_INFO_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      // handleError(error);
      dispatch({ type: types.GET_OCR_INFO_FAIL});   
    });
};
