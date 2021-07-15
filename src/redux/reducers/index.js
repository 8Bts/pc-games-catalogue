import { combineReducers } from 'redux';
import game from './game';
import filter from './filter';
import page from './page';
import singleGame from './singleGame';

export default combineReducers({
  game,
  filter,
  page,
  singleGame,
});
