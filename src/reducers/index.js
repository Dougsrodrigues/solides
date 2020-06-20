import { combineReducers } from 'redux';
import { signIn } from './signIn';

const reducers = combineReducers({ signIn });

export { reducers };
