import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import productReducer from './product/productReducer';

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  productReducer: productReducer,
});
