import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { appReducer } from './reducer';
import { thunk } from 'redux-thunk';

export const store = createStore(appReducer, applyMiddleware(thunk));
