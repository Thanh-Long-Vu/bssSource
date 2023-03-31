import {combineReducers} from 'redux';
import StackReducer from './stack';
import AuthReducer from './auth';
import BottomReducer from './bottom';

const reducers = {
  stack: StackReducer,
  auth: AuthReducer,
  bottom: BottomReducer,
};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;
