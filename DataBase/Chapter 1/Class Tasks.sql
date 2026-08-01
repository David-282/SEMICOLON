
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
    id INT AUTO_INCREMENT PRIMARY KEY,
    userEmail varchar(100),
    orderDate date
);

DROP TABLE fish;

drop table orders;

create table orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    userEmail VARCHAR(100),
    FOREIGN KEY (userEmail) REFERENCES users(userEmail),
    order_date date
    );
    
show tables;

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    userEmail VARCHAR(100) UNIQUE
);


CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id int,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);