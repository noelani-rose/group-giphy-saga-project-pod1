import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// bringing redux-saga into our project
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';



const favReducer = (state = [], action) =>{
  console.log('the fav reducer actionpaylod is', action.payload)
  switch(action.type){
      case 'SET_FAVS':
      return action.payload
  }
  return state
}

const searchReducer = ( state =[], action) => {
  switch(action.type){
    case 'SET_GIFS':
      
      return action.payload
  }
  
  return state
}


// const catReducer = (state = [], action) => {
//   switch(action.type){
//     case 'SET_CAT':
//       return action.payload
//   }
//   return state
// }

//GET gifs category router
function* fetchGifs(){
    console.log('in FetchGifs');
  
    let response = yield axios.get('/api/category');
    console.log('GET response:', response)
  
  
    
    yield put({
        type: 'SET_GIFS',
        payload: response.data
    })
  };

  //POST gifs categories router
// function* addCat(action){
//     console.log('in setCat', action);
    
//   //post the payload
//     yield axios.post('/api/category', action.payload);
//       yield put({
//         type: 'FETCH_CAT'
//     })
//   };

//POST gifs favorites router
function* addFavs(action){
    console.log('in addFavs', action);
    
  //post the payload
    yield axios.post(`/api/favorite/`, action.payload);
  
    //trigger a GET request
    yield put({
        // type: 'SET_FAV',
        type: 'FETCH_FAVS'
        // payload: response.data
    })
  };

  // make a GET request to server to get info from DB 
  // function* fetchCat(){
  //   yield axios.get('/api/category');

  //   yield put({
  //     type: 'SET_CAT',
  //     payload: response.data
  //   })
  // }


  //GET gifs favorites router
  function* fetchFavs(){
    console.log('in fetchFavs');
  
    let response = yield axios.get('/api/favorite');
    console.log('GET response:', response)
  
    
    yield put({
      type: 'SET_FAVS',
      payload: response.data
    })
    
  };

  function* search(action) {
    // const response = yield axios.get(`/search?query=${action.payload}`)
   const response = yield axios.get(`/search/${action.payload}`)

    yield put({
      type: 'SET_GIFS',
      payload: response.data
    })
  }

// This makes a middleware for us to use.
const sagaMiddleware = createSagaMiddleware();

//write each of these functions
function* watcherSaga() {
    // yield takeEvery('ADD_CAT', addCat)

      yield takeEvery('SET_SEARCH', search);

    yield takeEvery('ADD_FAV', addFavs);

//     yield takeEvery('SET_CAT', setCat);

    yield takeEvery('FETCH_FAVS', fetchFavs);
    // yield takeEvery('FETCH_CAT', fetchCat)
//     yield takeEvery(`FETCH_${CAT}`, getCat);

}

const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        // catReducer,
       favReducer,
       searchReducer

    }),
    // This adds middlewares. Logger should be last!
    applyMiddleware(sagaMiddleware, logger),
);

// This allows the watcherSaga to start watching for actions
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
