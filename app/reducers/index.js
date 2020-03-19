/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as homeReducer from './homeReducer'
import * as loginReducer from './loginReducer';
export default Object.assign(loginReducer, loadingReducer, homeReducer);
