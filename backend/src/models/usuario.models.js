import dbConnection from "../database/connection.js";
import bcryptjs from 'bcryptjs';
import passwordGenerate from "../helpers/generate.password.js";
import Candidato_model from "./candidato.models.js";

const connection = await dbConnection();

class Usuario_model {

    static async getAll(){
        try {
            const usuario = await connection.query(`
            SELECT
                usuario.id_usuario,
                usuario.nombres,
                usuario.apellidos,
                usuario.documento,
                tipo_documento.tipo_documento AS tipo_documento_usuario,
                rol.rol AS rol_usuario,
                usuario.password
            FROM
                usuario
            JOIN tipo_documento ON usuario.id_tipo_documento_fk = tipo_documento.id_tipo_documento
            JOIN rol ON usuario.id_rol_fk = rol.id_rol;`);
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
                SELECT usuario.*, rol.rol AS rol
                FROM usuario
                JOIN rol ON usuario.id_rol_fk = rol.id_rol
                WHERE usuario.documento = ?;
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
                return { error: "Estado del usuario Inactivo" };
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
            let { tipo_documento, nombres, apellidos, documento, password, email } = input;
            if (password.length == 0) {
                password = passwordGenerate();
            }
            const [tipoDocumentoResult] = await connection.query(`
            SELECT id_tipo_documento
            FROM tipo_documento
            WHERE nomenclatura = ?;
            `, [tipo_documento]);
            const id_tipo_documento_fk = tipoDocumentoResult?.id_tipo_documento;
            const salt = bcryptjs.genSaltSync();
            const hashedPassword = bcryptjs.hashSync(password, salt);
            const usuario = await connection.query(`
                INSERT INTO usuario(id_rol_fk, id_tipo_documento_fk, nombres, apellidos, documento, password, email, estado)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [ 2, id_tipo_documento_fk , nombres, apellidos, documento, hashedPassword, email, true]);
            await Candidato_model.create({id_usuario_fk: usuario.id_usuario, estado : false});
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