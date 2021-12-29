const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



router.get('/', (req,res) => {
  // Add query to get all genres
    const sqlQuery = 'SELECT * FROM genres ORDER BY "id" ASC;';
  
    pool.query(sqlQuery)
      .then(result => {
        res.send(result.rows);
        console.log('results', result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all GENRE', err);
        res.sendStatus(500)
      })
  
});


module.exports = router;