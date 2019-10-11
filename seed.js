// var data = require('./seed_data.js');
var mysql = require('mysql');
var faker = require('faker');
var connection = require('mysql_connection.js');

// database: 'homes_you_may_like'

console.log(faker.name)
connection.connect();

module.exports = connection;