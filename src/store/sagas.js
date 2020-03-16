import { all, fork } from 'redux-saga/effects';
import {sagas as home} from '@apps/home';
import {sagas as todos} from '@apps/todos';

export default function* () {
  yield all([
    fork(home),
    fork(todos)
  ]);
}