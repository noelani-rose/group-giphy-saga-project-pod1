import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

import React, { useState } from 'react';
import axios from 'axios';


function App(props) {

  const [gifs, setGifs] = useState({});  

  

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
