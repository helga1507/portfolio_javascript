import {takeLatest, call, put, delay} from 'redux-saga/effects'
import {getTodosAsync} from '../actions'
import {sendRequest} from '@core/api'

function* getTodos() {
  try{
    const data = yield call(sendRequest, {url: '/api/getTodos'});

    yield delay(2000);
    yield put(getTodosAsync.success(data));
  }
  catch (e) {
    yield put(getTodosAsync.failure('Произошла ошибка при получении данных'))
  }
}

export default function* () {
  yield takeLatest(getTodosAsync.request, getTodos);
}