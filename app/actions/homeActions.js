import * as types from './types';
import * as navigationActions from './navigationActions';
import axios from 'axios';
import ApiConstants from '../api/ApiConstants';

export const uploadInvoiceImage = source => dispatch => {
  const UID = Math.round(1 + Math.random() * (1000000 - 1));
  var data = {
    fileExt: 'png',
    imageID: UID,
    folder: UID,
    img: 'data:image/png;base64,' + source,
  };
  dispatch({ type: types.GET_OCR_INFO });
  axios
    .post(
      'https://8vlgj1j9f0.execute-api.us-west-1.amazonaws.com/Production',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => {
      // console.log("response", response)
      dispatch(getOcrData(UID));
    })
    .catch(error => {
      dispatch({ type: types.GET_OCR_INFO_FAIL });
      // handleError(error);
    });
};

export const getOcrData = UID => dispatch => {
  let targetImage = UID + '.png';
  axios
    .post(
      'https://8vlgj1j9f0.execute-api.us-west-1.amazonaws.com/Production/ocr',
      JSON.stringify(targetImage),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => {
      console.log("response.body[0]",response.data.body[0])
      dispatch({ type: types.GET_OCR_INFO_SUCCESS, ocrInfo : response.data.body[0] });
    })
    .catch(error => {
      dispatch({ type: types.GET_OCR_INFO_FAIL });
      // handleError(error);
    });
};
