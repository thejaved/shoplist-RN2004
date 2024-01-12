import {createStore} from 'redux';
import {rootReducer} from './Reducer';

const store = createStore(rootReducer);

export {store};
