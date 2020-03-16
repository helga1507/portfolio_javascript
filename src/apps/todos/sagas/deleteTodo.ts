import {takeLatest, call, put} from 'redux-saga/effects'
import {deleteTodosAsync} from '../actions'
import {sendRequest} from '@core/api'

function* deleteTodo({payload: {id}}: {payload: {id: any}}) {
  try{
    const data = yield call(sendRequest, {url: '/api/deleteTodo', method: 'post', data: {id}});

    yield put(deleteTodosAsync.success(data));
  }
  catch (e) {
    yield put(deleteTodosAsync.failure('Произошла ошибка при удалении'))
  }
}

export default function* () {
  yield takeLatest(deleteTodosAsync.request, deleteTodo);
}