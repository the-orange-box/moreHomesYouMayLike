DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;
USE airbnb;
CREATE TABLE houses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  picture1 VARCHAR(250),
  picture2 VARCHAR(250),
  picture3 VARCHAR(250),
  picture4 VARCHAR(250),
  picture5 VARCHAR(250),
  picture6 VARCHAR(250),
  house_type ENUM('entire-place', 'private-room', 'hotel-room', 'shared-room'),
  city VARCHAR(40) NOT NULL,
  longtitude DOUBLE NOT NULL,
  latitude DOUBLE NOT NULL,
  house_title VARCHAR(40) NOT NULL,
  max_guest_amount INT NOT NULL,
  price_per_night INT NOT NULL,
  rating FLOAT,
  reviews_amount INT
);