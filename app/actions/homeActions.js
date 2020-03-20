import * as types from './types';
import * as navigationActions from './navigationActions';
import axios from 'axios';
import ApiConstants from '../api/ApiConstants';

export const uploadInvoiceImage = data => dispatch => {
  console.log('****************in uploadInvoiceImage***********');
  // console.log("data", data)
  // dispatch({ type: types.GET_OCR_INFO});
  // axios
  //   .post(`${ApiConstants.BASE_URL}/production`, data, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then(response => {
  //     console.log("########################response", response)
  //   //  dispatch(getOcrData());
  //   })
  //   .catch(error => {
  //     console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")

  //       dispatch({ type: types.GET_OCR_INFO_FAIL});
  //     // handleError(error);
  //   });
  let responseProd = fetch(
    'https://8vlgj1j9f0.execute-api.us-west-1.amazonaws.com/Production',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application.json',
      },
      body: JSON.stringify(data),
    },
  );

  if (responseProd.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = responseProd.json();
    console.log('json', json);
  } else {
    alert('HTTP-Error: ' + responseProd.status);
  }
};

export const getOcrData = (data, history) => dispatch => {
  axios
    .get(`${ApiConstants.BASE_URL}/ocr}`)
    .then(response => {
      dispatch({
        type: types.GET_OCR_INFO_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      // handleError(error);
      dispatch({ type: types.GET_OCR_INFO_FAIL });
    });
};
