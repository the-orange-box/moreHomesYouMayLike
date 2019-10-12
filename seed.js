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

// INSERT INTO users (first_name, last_name, email, password, location, dept, is_admin, register_date) values ('Brad', 'Traversy', 'brad@gmail.com', '123456','Massachusetts', 'development', 1, now());


// id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
// picture1 VARCHAR(250),
// picture2 VARCHAR(250),
// picture3 VARCHAR(250),
// picture4 VARCHAR(250),
// picture5 VARCHAR(250),
// picture6 VARCHAR(250),
// house_type ENUM('entire-place', 'private-room', 'hotel-room', 'shared-room'),
// city VARCHAR(40) NOT NULL,
// longtitude DOUBLE NOT NULL,
// latitude DOUBLE NOT NULL,
// house_title VARCHAR(160) NOT NULL,
// max_guest_amount INT NOT NULL,
// price_per_night INT NOT NULL,
// rating FLOAT,
// reviews_amount INT


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
    "${(Math.random() * 5)}",
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
    "${(Math.random() * 5)}",
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