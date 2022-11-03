import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// bringing redux-saga into our project
import createSagaMiddleware from 'redux-saga';

const favoritesList = (state = [], action) => {
    switch (action.type) {
        case '':
            return action.payload;
        default:
            return state;
    }
};

// This makes a middleware for us to use.
const sagaMiddleware = createSagaMiddleware();


function* watcherSaga() {
    
    yield takeEvery('GET_GIFS', fetchGifs);

    yield takeEvery('ADD_FAV', addFav);

    yield takeEvery('SET_CAT', setCat);

    yield takeEvery('FETCH_FAV', getFav);

    yield takeEvery(`FETCH_${CAT}`, getCat);

}

const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        //firstReducer,
       // secondReducer,

    }),
    // This adds middlewares. Logger should be last!
    applyMiddleware(sagaMiddleware, logger),
);

// This allows the watcherSaga to start watching for actions
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<App />, document.getElementById('root'));
