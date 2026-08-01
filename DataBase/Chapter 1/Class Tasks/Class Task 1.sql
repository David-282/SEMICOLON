CREATE DATABASE user_db;

use user_db;
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
userEmail VARCHAR(100) UNIQUE
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
category varchar(100)
);


 
 show tables;
 CREATE TABLE orders(
	id serial primary key,
    userEmail varchar(100),
	foreign key (userEmail) references users(userEmail),
    orderDate date
);
 
 
  show tables;

 

