import React from 'react';
import SearchList from '../SearchList/SeachList';
import FavoriteList from '../FavoritesList/FavoritesList';
import { BrowswerRouter as Router, Route, Link } from 'react-router-dom';

// what is props doing here???
function App(props) {
  return (

    <div>
      <h1>Giphy Search!</h1>
      <SearchList />

      {/* <Link to = "/favorites"> */}
      {/* Favorites */}
      {/* </Link> */}

      {/* <Route exact path = "/favorites"> */}
        <FavoriteList />
      {/* </Route> */}

    </div>

  );
}

export default App;
