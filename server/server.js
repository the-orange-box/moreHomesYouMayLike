const express = require('express');
var mysql = require('mysql');
var path = require('path');
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
console.log(`Server connected`);

// default endpoint rendering
app.use('/', express.static(path.join(__dirname, '../public')))

// retrive 3 random entries (houses) from the database
app.get('/threeHousesYouMayLike', (req, res) => {
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