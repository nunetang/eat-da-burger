DROP DATABASE IF EXISTS y53e01k5ede9mrwy;
CREATE DATABASE y53e01k5ede9mrwy;


USE y53e01k5ede9mrwy;


CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
