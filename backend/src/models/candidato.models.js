import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Candidato_model{

    static async getAll(){
        try {
            const candidato = await connection.query(`SELECT * FROM candidato`);
            return candidato;
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error;
        }
    }

    static async create({ input }){
        try {
            const { id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion } = input;
            const candidato = await connection.query(`
            INSERT INTO candidato(id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion)
            VALUES (?, ?, ?, ?, ?)
            `, [id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion]);
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
            const { id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion } = input;
            const updateCandidato = await connection.query(`
            UPDATE candidato SET id_usuario_fk = ?, id_especialidad_fk = ?, avatar = ?, disponibilidad_viajar = ?, descripcion = ?
            WHERE id_candidato = ?
            `, [id_usuario_fk, id_especialidad_fk, avatar, disponibilidad_viajar, descripcion, id]);
            return updateCandidato;
        } catch (error) {
            console.error('Error en update', error);
        }
    }

}

export default Candidato_model;