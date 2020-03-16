import { createReducer } from 'typesafe-actions';
import {getTodosAsync, changeNewTodo, addTodosAsync, deleteTodosAsync} from '../actions'
import {Todo} from '@apps/todos/types';
import { combineReducers } from 'redux';

const isLoad = createReducer(false as boolean)
  .handleAction(getTodosAsync.request, () => true)
  .handleAction([getTodosAsync.failure, getTodosAsync.success], () => false);

const list = createReducer([] as Todo[])
  .handleAction(getTodosAsync.success, (state, action) => action.payload);
  // .handleAction(addTodosAsync.success, (state, action) => [...state.list, action.payload]);

const newTodo = createReducer('' as string)
  .handleAction(addTodosAsync.success, () => '')
  .handleAction(changeNewTodo, (state, action) => action.payload);

const error = createReducer(null as string | null)
  .handleAction(getTodosAsync.failure, (state, action) => action.payload)
  .handleAction(getTodosAsync.success, () => '');

export default combineReducers({list, isLoad, error, newTodo});

export const getList = (state: any) => state.todos.list;
export const getIsLoad = (state: any) => state.todos.isLoad;
export const getError = (state: any) => state.todos.error;
export const getNewTodo = (state: any) => state.todos.newTodo;