import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Giphy Search!</h1>
      <button onClick={searchGif}>Search</button>
    </div>
  );
}

export default App;
