const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites";`

  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('error getting favorites db back', err)
  })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('req body is', req.body.url)
  const queryText = `INSERT INTO "favorites" (url)
  VALUES ($1)`

  const sqlParams = [req.body.url]

  pool.query(queryText, sqlParams)
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('error adding url to favorites db', err)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
