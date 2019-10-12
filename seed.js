var mysql = require('mysql');
var faker = require('faker');
var connection = require('./mysql_connection.js');

console.log(faker.fake("{{address.city}}"));

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Success connecting to the database!');
  }
});

// this function is a helper function for the fake data
// it's get no arguments and return a string as one of the four
// option for housing types:
// 'entire-place', 'private-room', 'hotel-room', 'shared-room'
function generateHouseType() {
  let houseTypes = ['entire-place', 'private-room', 'hotel-room', 'shared-room'];
  return houseTypes[Math.floor((Math.random() * 4))];
}

// this function get a natural number n and will seed the database with
// n entries of fake data according to the schema
function createNFakeEntries(n) {
  for (var i = 0; i < n; i++) {
    var sqlInsertCommand = `INSERT INTO houses
  (
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    house_type,
    city,
    longtitude,
    latitude,
    house_title,
    max_guest_amount,
    price_per_night,
    rating,
    reviews_amount
  )
VALUES
  (
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${generateHouseType()}",
    "${faker.address.city()}",
    "${faker.address.longitude()}",
    "${faker.address.latitude()}",
    "${faker.lorem.sentence()}",
    "${Math.ceil((Math.random() * 16))}",
    "${Math.ceil((Math.random() * 600)) + 80}",
    "${(Math.random() * 5).toFixed(1)}",
    "${Math.ceil((Math.random() * 2000))}"
  )
`;
    connection.query(sqlInsertCommand, function (err, result) {
      if (err) {
        console.log(`Could not run: ${sqlInsertCommand} error: ${err}`);
      } else {
        console.log(`Successfully ran this command: ${sqlInsertCommand}`);
      }
    });
  }
}

var sqlInsertCommand = `INSERT INTO houses
  (
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    house_type,
    city,
    longtitude,
    latitude,
    house_title,
    max_guest_amount,
    price_per_night,
    rating,
    reviews_amount
  )
VALUES
  (
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${faker.image.imageUrl()}",
    "${generateHouseType()}",
    "${faker.address.city()}",
    "${faker.address.longitude()}",
    "${faker.address.latitude()}",
    "${faker.lorem.sentence()}",
    "${Math.ceil((Math.random() * 16))}",
    "${Math.ceil((Math.random() * 600)) + 80}",
    "${(Math.random() * 5).toFixed(1)}",
    "${Math.ceil((Math.random() * 2000))}"
  )
`;
connection.query(sqlInsertCommand, function (err, result) {
  if (err) {
    console.log(`Could not run: ${sqlInsertCommand} error: ${err}`);
  } else {
    console.log(`Successfully ran this command: ${sqlInsertCommand}`);
  }
});

connection.end();
// module.exports = connection;