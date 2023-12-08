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