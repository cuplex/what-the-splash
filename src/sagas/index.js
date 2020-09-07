
import { takeEvery } from 'redux-saga/effects'
import { IMAGES } from '../constants'

// worker saga
function *loadImages() {
    console.log('loading images')
}

// watcher saga
function *rootSaga() {
    yield takeEvery(IMAGES.LOAD, loadImages)
}

export default rootSaga;