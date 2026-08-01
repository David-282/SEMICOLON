CREATE DATABASE my_first_db;


USE my_first_db;


CREATE TABLE users(
	id INT PRIMARY KEY auto_increment,
    name varchar(10),
    age int,
    email varchar (100)
    );
    
    
INSERT INTO users (name, age, email)
VALUES 
('David', 25, 'david@email.com'),
('Sarah', 30, 'sarah@email.com');

SELECT * FROM users;

TRUNCATE TABLE users;

INSERT INTO users (name, age, email)
VALUES 
('David', 25, 'david@email.com'),
('Sarah', 30, 'sarah@email.com');

SELECT * FROM users;

DELETE FROM users
WHERE id > 2;


alter table users
add phoneNumber varchar(11) after age;


update users
set phoneNumber = '12345678901'
where id = 1; 


SELECT * FROM users;

update users
set phoneNumber = '12345678921'
where id = 2; 

SELECT * FROM users;

use my_first_db;

CREATE TABLE employees(
	id INT PRIMARY KEY auto_increment,
    name varchar(10),
    email varchar(20),
	salary int 
	);
    
INSERT INTO employees (name, email, salary)
VALUES 
('Alice','alice@gmail.com',50000),
('Bob','bob@gmail.com',60000),
('Carol','carol@gmail.com',55000),
('Dave','dave@gmail.com',70000);

    
update employees
set name = 'Robert'
where name = 'Bob';

update employees
set name = 'DAVID', email = 'david@gmail.com'
where id = 4;

update employees
set salary = salary + 5000
where name = 'Alice';

update employees
set salary = 60000
where name = 'Carol';

update employees
set email = 'low@company.com'
where salary < 60000 ;

update employees
set salary =  (0.1 * salary) + salary;


update employees
set salary = salary * 1.20
where salary < 60000 ;