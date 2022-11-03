import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// bringing redux-saga into our project
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects'


const favReducer = (state = [], action) =>{
  return state
}


//GET gifs category router
function* fetchGifs(){
    console.log('in FetchGifs');
  
    let response = yield axios.get('/api/category');
    console.log('GET response:', response)
  
  
    
    yield put({
        type: 'GET_GIFS',
        payload: response.data
    })
  };



  //POST gifs categories router
function* setCat(action){
    console.log('in setCat', action);
    
  //post the payload
    yield axios.post('/api/category', action.payload);
  
    //trigger a GET request
    yield put({
        type: 'SET_CAT'
    })
  };



//POST gifs favorites router
function* addFavs(action){
    console.log('in addFavs', action);
    
  //post the payload
    yield axios.post('/api/favorite', action.payload);
  
    //trigger a GET request
    yield put({
        type: 'ADD_FAV'
    })
  };



  //GET gifs favorites router
  function* getFavs(){
    console.log('in getFavs');
  
    let response = yield axios.get('/api/favorite');
    console.log('GET response:', response)
  
  
    
    yield put({
        type: 'FETCH_FAVS',
        payload: response.data
    })
  };





// This makes a middleware for us to use.
const sagaMiddleware = createSagaMiddleware();



//write each of these functions
function* watcherSaga() {

//     yield takeEvery('GET_GIFS', fetchGifs);

//     yield takeEvery('ADD_FAV', addFavs);

//     yield takeEvery('SET_CAT', setCat);

//     yield takeEvery('FETCH_FAV', getFavs);

//     yield takeEvery(`FETCH_${CAT}`, getCat);

}

const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        //firstReducer,
        // catReducer,
       // secondReducer,
       favReducer,

    }),
    // This adds middlewares. Logger should be last!
    applyMiddleware(sagaMiddleware, logger),
);

// This allows the watcherSaga to start watching for actions
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
