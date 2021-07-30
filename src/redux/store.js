import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './reducers/index';

export default createStore(reducer, {}, applyMiddleware(promise));
