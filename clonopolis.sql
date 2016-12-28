CREATE TABLE IF NOT EXISTS empleados(nombre text, id int AUTO_INCREMENT NOT NULL,puesto text,edad int,direccion text,sexo text, telefono varchar(20), nss varchar(20),PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS productos(id int AUTO_INCREMENT NOT NULL,nombre text, ,precio float, descripcion text, tam text,PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS peliculas( id int AUTO_INCREMENT NOT NULL,nombre text,duracion float,clasificacion text, fecha_estreno text,idioma text,genero text, sinopsis text, PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS salas(id int AUTO_INCREMENT NOT NULL,butacas int,butacas_disponibles int,tipo text,PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS clientes(id int AUTO_INCREMENT NOT NULL,nombre text,categoria int,PRIMARY KEY(id));

CREATE TABLE IF NOT EXISTS funciones(horario varchar(10),id int AUTO_INCREMENT NOT NULL,pelicula int NOT NULL,sala int NOT NULL,PRIMARY KEY(id),FOREIGN KEY (pelicula) REFERENCES peliculas(id),FOREIGN KEY (sala) REFERENCES salas(id));

CREATE TABLE IF NOT EXISTS boletos(id int AUTO_INCREMENT NOT NULL, funcion int NOT NULL,FOREIGN KEY (funcion) REFERENCES funciones(id),empleado int NOT NULL,PRIMARY KEY(id),FOREIGN KEY (empleado) REFERENCES empleados(id), cliente int NOT NULL,FOREIGN KEY (cliente) REFERENCES clientes(id),fecha text, hora float);

INSERT INTO empleados(nombre,puesto,edad,direccion,sexo,telefono,nss) VALUES ("Pepe","Empleado De piso",21,"Su casa","H","3341252365",123454489);
INSERT INTO productos(nombre,precio,descripcion,tam) VALUES ("Palomitas",80.5,"palomitas con mantequilla :d",3);
INSERT into peliculas(nombre,duracion,clasificacion,sinopsis,fecha_estreno,idioma,genero) VALUES("civilwar",120.6,"C++","stark quiere hacer un trio con bucky y rogers :v ","01-03-2016","Español","accion xxx");
