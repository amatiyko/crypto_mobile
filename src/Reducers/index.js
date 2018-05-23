import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AppReducer from './AppReducer';


export default combineReducers({
    crypto: CryptoReducer,
    app: AppReducer
});