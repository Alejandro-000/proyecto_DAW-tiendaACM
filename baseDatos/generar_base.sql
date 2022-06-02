DROP DATABASE IF EXISTS tiendaACM;
CREATE DATABASE tiendaACM CHARSET utf8mb4;
USE tiendaACM;

CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

CREATE TABLE productos(
	id_prod INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(20) NOT NULL,
    formato VARCHAR(10) NOT NULL,
    marca VARCHAR(10) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    precio FLOAT NOT NULL,
    descripcion TEXT,
    especificaciones VARCHAR(50) NULL,
    url VARCHAR(255) NOT NULL, -- / url_foto VARCHAR(255) NOT NULL,
    -- RELACION ENTRE LA TABLA 'productos' Y LA TABLA 'users'
    -- cambiar la relacion, para adaptarlo a la tabla pedidos --
    id_usuario INT UNSIGNED,
    CONSTRAINT fkuser FOREIGN KEY(id_usuario) REFERENCES users(id)
);

-- CREATE TABLE pedidos(
--     id_pedido INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     id_usuario VARCHAR(16) NOT NULL,
--     lista TEXT,
--     productos INT UNSIGNED,
--     CONSTRAINT id_usuario FOREIGN KEY(id_usuario) REFERENCES users(id),
-- );


-- falta crear las relaciones entre el cliente y el producto:
-- tambien la tabla entre clientes y productos, la cual puede
-- ser considerada 'pedidos', y dentro creamos las relaciones
-- 1:M para id_usuario--id_productos o 'usuario_compra_productos'



-- idea: el icono no debe recargar la pagina, sino que ejecuta
-- una funcion que consiste en marcar un checkbox escondido,
-- de esta forma, podemos recorrer la lista de productos e ir
-- comprobando los elementos que están 'checked'
-- HAY QUE REPLANTEARSE UN POCO MAS LA IDEA, PERO VA POR BUEN CAMINO
-- ES LA MISMA IDEA QUE LA DE EL MENU DE COMPONENTES BASICOS



-- Comprobar que estas son todas las tablas que queremos crear,
-- por si queremos tener anguna relacion entre las tablas

INSERT INTO users(username, password, email, fullname) VALUES('admin', 'administrador', 'alexruizdela@gmail.com','Alejandro Ruiz');
INSERT INTO productos(tipo, formato, marca, nombre, precio, descripcion, url) VALUES
    ('placa_base','torre','GTX','placa base con 100GB de memoria incorporada','75','Placa base con un poco de almacenamiento incorporado', 'https://mejorreviews.com/wp-content/uploads/2020/11/ASUS-ROG-X570-crosshair-VIII-Formula.jpg')-- ,
    -- ('procesador','portatil','AMD','','','')
    
    ;


-- INSERT INTO productos(nombre, precio, descripcion, foto) 
-- VALUES(
--     'Ejemplo producto', '0.0', 'Descripción del producto indicado', 'https://m.media-amazon.com/images/I/61aTywrhyBS._AC_SY355_.jpg'
-- );



-- SELECT * FROM productos WHERE descripcion LIKE %palabra_buscar%;

-- INSERT INTO productos(nombre, precio, descripcion, foto) VALUES('Ejemplo producto', '0.0', 'Descripción del producto indicado', '');

-- /// de db_coches.sql' de NODEJS-MYSQL-COMPLETA ///// --
-- USAR LINEAS PARA AÑADIR RELACIONES EN NUESTRA BASE DE DATOS
-- CREATE DATABASE mycars CHARSET utf8mb4;
-- USE mycars;

