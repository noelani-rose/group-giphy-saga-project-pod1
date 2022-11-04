import SearchList from '../SearchList/SeachList';
import FavoriteList from '../FavoritesList/FavoritesList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

// what is props doing here???
function App(props) {

  const [gifs, setGifs] = useState({});  

  function searchGif() {
    axios({
      method: 'GET',
      url: '/search',
      // data: 'funny'
    })
      .then(res => {
        console.log('getting gifs', res.data);
        //setGifs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Router>
    <div>
      <Route exact path = "/">
      <h1>Giphy Search!</h1>
      <SearchList />
      </Route>

      <Link to = "/favorites">
      Go to Favorites
      </Link>

      <Route exact path = "/favorites">
        <FavoriteList />
      </Route>

      <button onClick={searchGif}>Search</button>
    </div>
    </Router>
  );
}

export default App;
