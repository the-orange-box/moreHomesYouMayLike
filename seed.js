// var data = require('./seed_data.js');
var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'homes_you_may_like'
});

console.log(faker.name)
connection.connect();

module.exports = connection;