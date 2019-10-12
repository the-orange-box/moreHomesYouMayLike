const express = require('express');
var mysql = require('mysql');
var connection = require('../mysql_connection.js');
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Success connecting to the database!');
  }
});

const app = express();
const PORT = 3030;
console.log(`server connected`);

app.get('/', (req, res) => {
  res.send('The server is working and listening to endpoint /');
  express.static('../public');
});

app.get('/threeHousesYouMayLike', (req, res) => {
  // res.send('The server is working and listening to endpoint /threeHousesYouMayLike');

  var sqlGetThreeRandomHouses = `SELECT * FROM houses ORDER BY RAND() LIMIT 3`;
  connection.query(sqlGetThreeRandomHouses, function (err, result) {
    if (err) {
      console.log(`Could not run: ${sqlGetThreeRandomHouses} error: ${err}`);
    } else {
      console.log(`Successfully ran this command: ${sqlGetThreeRandomHouses}`);
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))