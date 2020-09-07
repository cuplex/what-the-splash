import { combineReducers } from 'redux';

import loadingReducer from './loading-reducer';
import imagesReducer from './images-reducer';
import errorReducer from './error-reducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer;
