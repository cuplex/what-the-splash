
import { takeEvery, put } from 'redux-saga/effects'

// worker saga
function *workerSaga() {
    console.log('workerSaga called');
    console.log(put({ type: 'DISPATCHED_FROM_WORKER'}));
    yield put({ type: 'DISPATCHED_FROM_WORKER'});
}

// watcher saga
function *rootSaga() {
    yield takeEvery('HELLO_ACTION', workerSaga);
}

export default rootSaga;