import { combineReducers } from 'redux'

import loadingReducer from './loading-reducer'
import imagesReducer from './images-reducer'
import errorReducer from './error-reducer'
import pageReducer from './page-reducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;
