CREATE DATABASE skatepark;

CREATE TABLE skaters (
     id       SERIAL,
     email    VARCHAR(50) NOT NULL,
     nombre   VARCHAR(25) NOT NULL,
     password VARCHAR(25) NOT NULL,
     anos_experiencia INT NOT NULL,
     especialidad VARCHAR(50) NOT NULL,
     foto         VARCHAR(255) NOT NULL,
     estado       BOOLEAN NOT NULL
);

INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ('TonyHawk@gmail.com', 'Tony Hawk','123456', 12, 'Kickflip', 'tony.jpg', True );
INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ('Evelien Bouilliart@gmail.com', 'Evelien Bouilliart','Eve1988', 10, 'Heelflip', 'Evelien.jpg', True );
INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ('Danny Way@hotmail.com', 'Danny Way','DonyWay22', 8, 'Ollie', 'Danny.jpg', False );
