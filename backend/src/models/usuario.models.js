import dbConnection from "../database/connection.js";
import bcryptjs from 'bcryptjs';

const connection = await dbConnection();

class Usuario_model {

    static async getAll(){
        try {
            const usuario = await connection.query(`SELECT * FROM usuario`);
            return usuario;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

    static async getAssets(){
        try {
            const usuario = await connection.query(`
                SELECT * FROM usuario WHERE estado = 1
            `);
            return usuario;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

    static async getUserByDocumento({ documento }){
        try {
            const usuario = await connection.query(`
                SELECT * FROM usuario WHERE documento = ?
            `, [documento]);
            return usuario;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener usuario por documento");
        }
    }

    static async login({ documento, password}){
        try {
            const usuario = await this.getUserByDocumento({ documento });
            const user = usuario[0]

            if (!usuario.length) {
                return { error: "Documento no es correcto" };
            }

            if (user.estado == '0') {
                return { error: "Estado Inactivo" };
            }

            const validPassword = bcryptjs.compareSync(password, user.password);

            if (!validPassword) {
                return { error: "Password Incorrecto" };
            }

            return { usuario: usuario };
        } catch (error) {
            console.log(error);
            throw new Error("Error en la autenticación");
        }
    }

    static async create({ input }){
        try {
            const { id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password, email } = input;
            const salt = bcryptjs.genSaltSync();
            const hashedPassword = bcryptjs.hashSync(password, salt);
            const usuario = await connection.query(`
                INSERT INTO usuario(id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password, email, estado)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, hashedPassword, email, true]);
            return usuario;
        } catch (error) {
            console.error('Error en create', error);
        }
    }

    static async delete({ id }){
        try {
            const deleteUsuario = await connection.query(`
                UPDATE usuario
                SET estado = false
                WHERE id_usuario = ?;
            `, [id]);
            return deleteUsuario;
        } catch (error) {
            console.error('Error en delete', error);
        }
    }

    static async update({ id, input }){
        try {
            const { id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password, email } = input;
            const updateUsuario = await connection.query(`
                UPDATE usuario SET id_rol_fk = ?, id_tipo_documento_fk = ?, nombres = ?, apellidos = ?, documento = ?, password = ?, email = ?
                WHERE id_usuario = ?
            `, [id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password, email, id]);
            return updateUsuario;
        } catch (error) {
            console.error('Error en update', error);
        }
    }

}

export default Usuario_model;