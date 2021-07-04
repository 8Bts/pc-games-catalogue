import { combineReducers } from 'redux';
import game from './game';
import filter from './filter';

export default combineReducers({
  game,
  filter,
});
