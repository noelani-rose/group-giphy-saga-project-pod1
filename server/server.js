require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// Giphy api route
app.get('/search', (req, res) => {
  console.log('req.body is ', req.body)
  axios({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
          api_key: process.env.GIPHY_API_KEY,
          q: req.body,
          limit: 9
      }
  })
  .then((apiRes) => {
      // send back the data from giphy
      console.log('API get request success!')
      res.send(apiRes.data);
  })
  .catch((err) => {
      console.error('API req failed', err);
      res.sendStatus(500);
  })
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
