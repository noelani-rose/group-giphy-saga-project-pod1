import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

import React, { useState } from 'react';
import axios from 'axios';



import SearchList from '../SearchList/SeachList';
import FavoriteList from '../FavoritesList/FavoritesList';

// what is props doing here???
function App(props) {

  const [gifs, setGifs] = useState({});  

  

  return (
    <Router>
    <div>
      <Route exact path = "/">
      <h1>Giphy Search!</h1>
      < SearchForm />
      <SearchList />
      </Route>
    </div>

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
