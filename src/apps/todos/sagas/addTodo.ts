import {takeLatest, call, put, select} from 'redux-saga/effects'
import {addTodosAsync} from '../actions'
import {getNewTodo} from '../reducers'
import {sendRequest} from '@core/api'

function* addTodo() {
  try{
    const todo = yield select(getNewTodo);
    const data = yield call(sendRequest, {url: '/api/addTodo', method: 'post', data: {todo}});

    yield put(addTodosAsync.success(data));
  }
  catch (e) {
    yield put(addTodosAsync.failure('Произошла ошибка при добавлении данных'))
  }
}

export default function* () {
  yield takeLatest(addTodosAsync.request, addTodo);
}