import dbConnection from "../database/connection.js";
import { usuarioTieneCandidato } from "../helpers/db.validators.js";

const connection = await dbConnection();

class Candidato_model{

    static async getAll(){
        try {
            const candidato = await connection.query(`
                SELECT
                    candidato.id_candidato,
                    CONCAT(usuario.nombres, ' ', usuario.apellidos) as nombre_usuario,
                    especialidad.especialidad as nombre_especialidad,
                    nivel_ingles.nivel_ingles as nivel_de_ingles,
                    candidato.avatar,
                    candidato.disponibilidad_viajar,
                    candidato.descripcion
                FROM candidato
                JOIN usuario ON candidato.id_usuario_fk = usuario.id_usuario
                JOIN especialidad ON candidato.id_especialidad_fk = especialidad.id_especialidad
                JOIN nivel_ingles ON candidato.id_nivel_ingles_fk = nivel_ingles.id_nivel_ingles;                   
        `);
            return candidato;
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }

    static async getAssets(){
        try {
            const usuario = await connection.query(`
                SELECT
                    candidato.id_candidato,
                    CONCAT(usuario.nombres, ' ', usuario.apellidos) as nombre_usuario,
                    especialidad.especialidad as nombre_especialidad,
                    nivel_ingles.nivel_ingles as nivel_de_ingles,
                    candidato.avatar,
                    candidato.disponibilidad_viajar,
                    candidato.descripcion,
                    GROUP_CONCAT(tecnologia.tecnologia) as tecnologias
                FROM candidato
                JOIN usuario ON candidato.id_usuario_fk = usuario.id_usuario
                JOIN especialidad ON candidato.id_especialidad_fk = especialidad.id_especialidad
                JOIN nivel_ingles ON candidato.id_nivel_ingles_fk = nivel_ingles.id_nivel_ingles
                LEFT JOIN candidato_tecnologia ON candidato.id_candidato = candidato_tecnologia.id_candidato_fk
                LEFT JOIN tecnologia ON candidato_tecnologia.id_tecnologia_fk = tecnologia.id_tecnologia
                WHERE candidato.estado = 1
                GROUP BY candidato.id_candidato;        
            `);
            return usuario;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

    static async create({ input }){
        try {
            const { id_usuario_fk, id_especialidad_fk, id_nivel_ingles_fk, avatar, disponibilidad_viajar, descripcion } = input;
            //si quiero que sea un update o create
            const candidato = await connection.query(`
            INSERT INTO candidato(id_usuario_fk, id_especialidad_fk, id_nivel_ingles_fk, avatar, disponibilidad_viajar, descripcion, estado)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `, [id_usuario_fk, id_especialidad_fk, id_nivel_ingles_fk, avatar, disponibilidad_viajar, descripcion, false]);
            return candidato;
        } catch (error) {
            console.error('Error en create', error);
        }
    }

    static async delete({ id }){
        try {
            const deleteCandidato = await connection.query(`
            DELETE FROM candidato WHERE id_candidato = ?`, [id]);
            return deleteCandidato;
        } catch (error) {
            console.error('Error en delete', error);
        }
    }

    static async update({ id, input }){
        try {
            const { id_usuario_fk, id_especialidad_fk, id_nivel_ingles_fk, avatar, disponibilidad_viajar, descripcion } = input;
            const updateCandidato = await connection.query(`
            UPDATE candidato SET id_usuario_fk = ?, id_especialidad_fk = ?, id_nivel_ingles_fk = ?, avatar = ?, disponibilidad_viajar = ?, descripcion = ?
            WHERE id_candidato = ?
            `, [id_usuario_fk, id_especialidad_fk, id_nivel_ingles_fk, avatar, disponibilidad_viajar, descripcion, id]);
            return updateCandidato;
        } catch (error) {
            console.error('Error en update', error);
        }
    }

}

export default Candidato_model;