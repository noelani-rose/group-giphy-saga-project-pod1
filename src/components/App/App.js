import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';


function App(props) {
  return (
    <Router>
    <div>
      <h1>Giphy Search!</h1>
      < SearchForm />
    </div>
    </Router>


  );
}

export default App;
