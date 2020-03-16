import {all, fork} from 'redux-saga/effects'

import getTodos from './getTodos'
import addTodo from './addTodo'
import deleteTodo from './deleteTodo'

export default function* () {
  yield all([
    fork(getTodos),
    fork(addTodo),
    fork(deleteTodo)
  ])
}