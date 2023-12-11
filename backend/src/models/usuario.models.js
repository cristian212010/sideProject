import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Usuario_model {

    static async getAll(){
        try {
            const usuario = await connection.query('SELECT * FROM usuario');
            return usuario;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

    static async create({ input}){
        try {
            const { id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password } = input;
            const usuario = await connection.query(`
            INSERT INTO usuario(id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password)
            VALUES (?, ?, ?, ?, ?, ?)
            `, [id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password]);
            return usuario;
        } catch (error) {
            console.error('Error en create', error);
        }
    }

}

export default Usuario_model;