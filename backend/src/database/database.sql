USE buvifxkzp2bog53sduje;

CREATE TABLE tipo_documento(
id_tipo_documento INT PRIMARY KEY AUTO_INCREMENT,
tipo_documento VARCHAR(50) NOT NULL
);

CREATE TABLE rol(
id_rol INT PRIMARY KEY AUTO_INCREMENT,
rol VARCHAR(50) NOT NULL
);

CREATE TABLE especialidad(
id_especialidad INT PRIMARY KEY AUTO_INCREMENT,
especialidad VARCHAR(50) NOT NULL
);

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
id_rol_fk INT NOT NULL,
id_tipo_documento_fk INT NOT NULL,
nombres VARCHAR(50) NOT NULL,
apellidos VARCHAR(50) NOT NULL,
documento VARCHAR(20) NOT NULL,
password VARCHAR(30) NOT NULL,
FOREIGN KEY (id_rol_fk) REFERENCES rol(id_rol),
FOREIGN KEY (id_tipo_documento_fk) REFERENCES tipo_documento(id_tipo_documento)
);

CREATE TABLE candidato(
id_candidato INT PRIMARY KEY AUTO_INCREMENT,
id_usuario_fk INT NOT NULL,
id_especialidad_fk INT NOT NULL,
avatar VARCHAR(50) NOT NULL,
disponibilidad_viajar BOOLEAN NOT NULL,
descripcion TEXT,
FOREIGN KEY (id_usuario_fk) REFERENCES usuario(id_usuario),
FOREIGN KEY (id_especialidad_fk) REFERENCES especialidad(id_especialidad)
);

-- Insertar datos en la tabla tipo_documento
INSERT INTO tipo_documento (tipo_documento) VALUES
('Cédula de Ciudadanía'),
('Tarjeta de Identidad'),
('Pasaporte'),
('Cédula de Extranjería'),
('Licencia de Conducir');

-- Insertar datos en la tabla rol
INSERT INTO rol (rol) VALUES 
('ADMIN'),
('USER');

-- Insertar datos en la tabla especialidad
INSERT INTO especialidad (especialidad) VALUES 
('Backend'),
('Frontend'),
('Full Stack');

-- Insertar datos en la tabla usuario
INSERT INTO usuario (id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password) VALUES
(1, 1, 'Admin', 'Admin', '12345678A', 'adminpassword'), -- Usuario Admin
(2, 2, 'John', 'Doe', '87654321B', 'userpassword1'),
(2, 1, 'Jane', 'Smith', '98765432C', 'userpassword2'),
(2, 3, 'Michael', 'Johnson', '76543210D', 'userpassword3'),
(2, 2, 'Emily', 'Davis', '54321098E', 'userpassword4'),
(2, 1, 'Daniel', 'Brown', '10293847F', 'userpassword5');

-- Insertar datos en la tabla candidato
INSERT INTO candidato (id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion) VALUES
(2, 1, 'avatar1.jpg', true, 'Soy ingeniero en sistemas con más de 7 años de experiencia en la industria del software. Actualmente, me desempeño como Data Engineer, destacando en ETL, SSIS, DTS, GCP SQL y TSQL. Mi trayectoria incluye trabajos en las industrias de banking, seguros, automotriz, entre otras. En este momento, estoy en búsqueda de nuevas oportunidades para continuar creciendo profesionalmente. A nivel interpersonal, cuento con excelentes habilidades de comunicación.');

-- Insertar datos en la tabla candidato
INSERT INTO candidato (id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion) VALUES
(3, 2, 'avatar2.jpg', false, 'Me llamo Jane Smith y soy desarrolladora frontend con experiencia en la creación de interfaces atractivas y funcionales. He trabajado en proyectos especializados en JavaScript y React, contribuyendo al éxito de diversas aplicaciones web. Mi enfoque es siempre proporcionar experiencias de usuario excepcionales. Actualmente, no estoy disponible para viajar y busco oportunidades desafiantes para seguir mejorando mis habilidades.');

-- Insertar datos en la tabla candidato
INSERT INTO candidato (id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion) VALUES
(4, 3, 'avatar3.jpg', true, 'Mi nombre es Michael Johnson y soy un desarrollador Full Stack con habilidades en Node.js, React y MongoDB. Cuento con una sólida experiencia en la creación de aplicaciones web completas y funcionales. Mi carrera incluye contribuciones a proyectos en diversas industrias, y actualmente estoy buscando oportunidades que me desafíen y permitan seguir creciendo como profesional. Estoy disponible para viajar según sea necesario.');

-- Insertar datos en la tabla candidato
INSERT INTO candidato (id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion) VALUES
(5, 1, 'avatar4.jpg', false, 'Soy Emily Davis, una experta en Python y Flask con experiencia destacada en el desarrollo backend. He trabajado en proyectos que involucran la implementación de soluciones eficientes y escalables. Mi enfoque es garantizar la robustez y la seguridad en cada aspecto del desarrollo. En este momento, no estoy disponible para viajar y estoy emocionada por nuevas oportunidades para aplicar mis habilidades y conocimientos.');

-- Insertar datos en la tabla candidato
INSERT INTO candidato (id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion) VALUES
(6, 2, 'avatar5.jpg', true, 'Me llamo Daniel Brown y soy un desarrollador frontend con habilidades en HTML, CSS y JavaScript. Mi enfoque es crear interfaces atractivas y funcionales que mejoren la experiencia del usuario. Tengo experiencia en diversos proyectos y tecnologías web. Actualmente estoy disponible para viajar y estoy en busca de nuevas oportunidades para aplicar y expandir mis habilidades.');


