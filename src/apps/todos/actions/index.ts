import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import {Todo} from '@apps/todos/types';

// const inferLiteralFromString = <T extends string>(arg: T) : T => arg;
// export const createAction = <P>(action: string) => (payload: P) => ({ type: inferLiteralFromString(action), payload });

export const getTodosAsync = createAsyncAction(
  'GET_TODOS_REQUEST',
  'GET_TODOS_SUCCESS',
  'GET_TODOS_FAILURE'
)<undefined, Todo[], string>();

export const changeNewTodo = createStandardAction('CHANGE_NEW_TODO')<string>();

export const addTodosAsync = createAsyncAction(
  'ADD_TODO_REQUEST',
  'ADD_TODO_SUCCESS',
  'ADD_TODO_FAILURE'
)<undefined, Todo, string>();

export const deleteTodosAsync = createAsyncAction(
  'DELETE_TODO_REQUEST',
  'DELETE_TODO_SUCCESS',
  'DELETE_TODO_FAILURE'
)<{id: string}, {index: number}, string>();


