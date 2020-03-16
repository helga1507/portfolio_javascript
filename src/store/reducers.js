import { combineReducers } from 'redux';
import {reducers as home} from '@apps/home';
import {reducers as todos} from '@apps/todos';

export default combineReducers({
  home,
  todos
});