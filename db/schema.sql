CREATE DATABASE Craigslist_db;
USE Craigslist_db;

CREATE TABLE bases(
	id INT AUTO_INCREMENT,
    base_name VARCHAR(255),
    url_slug VARCHAR(255),
    PRIMARY KEY(id));
    
CREATE TABLE users(
	id INT AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    image_link TEXT,
    rank VARCHAR(255),
    base_id INT NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY(base_id)
		REFERENCES bases(id)
	);

CREATE TABLE categories(
	id INT AUTO_INCREMENT,
    category_name VARCHAR(255),
    url_slug VARCHAR(255),
    PRIMARY KEY(id));
    
CREATE TABLE items(
	id INT AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    image_link TEXT,
    price DECIMAL(10,2) DEFAULT 0.00,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(category_id)
		REFERENCES categories(id)
        ON DELETE CASCADE,
	FOREIGN KEY(user_id)
		REFERENCES users(id)
        ON DELETE CASCADE
	);
