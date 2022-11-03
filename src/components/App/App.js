import React from 'react';
import SearchList from '../SearchList/SeachList';
import FavoriteList from '../FavoritesList/FavoritesList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// what is props doing here???
function App(props) {
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

    </div>
    </Router>
  );
}

export default App;
