/*
 * Reducer actions related with login
 */
import * as types from './types';
import * as navigationActions from './navigationActions';

export const requestLogin = (username, password) => dispatch => {
  {
    const response = { success: true, data: { id: 1 } };
    if (response.success) {
      dispatch(onLoginResponse(response.data))
      dispatch(disableLoader({}))
      dispatch(navigationActions.navigateToHome)
    } else {
      dispatch(loginFailed())
      dispatch(disableLoader({}))
      setTimeout(() => {
        Alert.alert('BoilerPlate', response.Message);
      }, 200);
    }
    dispatch({
      type: types.LOGIN_REQUEST,
      username,
      password,
    })
  }
}


export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}
