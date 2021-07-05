import { combineReducers } from 'redux';
import game from './game';
import filter from './filter';
import page from './page';

export default combineReducers({
  game,
  filter,
  page,
});
