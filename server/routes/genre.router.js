const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/selected-movie-genre/:id', (req,res) => {
  // Add query to get all genres
    console.log('/genre', req.query.id);
    const sqlQuery =
    `SELECT "genres"."name" FROM "genres"
    JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
    JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id"
    WHERE "movies"."id" = $1
    GROUP BY "genres"."name"`;
  
    pool.query(sqlQuery, [req.params.id])
      .then(result => {
        res.send(result.rows);
        console.log('results', result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all GENRE', err);
        res.sendStatus(500)
      })
  
});

// get ALL genres 
router.get('/', (req, res) => {
  const genresQuery= `SELECT * FROM "genres" ORDER BY "name";`;
  pool.query(genresQuery)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR getting all genres (genre.router.js)', err);
      res.sendStatus(500)
    })
});

module.exports = router;