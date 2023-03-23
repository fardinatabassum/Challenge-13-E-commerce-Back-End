-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

use ecommerce_db; 

CREATE TABLE Category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name STRING NOT NULL
);

CREATE TABLE Product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name STRING NOT NULL,
    Price DEC NOT NULL,
    stock INT NOT NULL,
    category_id REFERENCES Category(id)
);

CREATE TABLE Tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name STRING
);

CREATE TABLE ProductTag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT REFERENCES Product(id),
    tag_id INT REFERENCES Tag(id)
);