import { combineReducers } from 'redux';
import cocktails from './cocktails/cocktails';

const State = combineReducers({
  cocktails,
});

export default State;
