import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Candidato_tecnologia_models {

    static async create({ input }){
        try {
            const { id_candidato_fk, id_tecnologia_fk } = input;
            const candidato = await connection.query(`
            INSERT INTO candidato_tecnologia(id_candidato_fk, id_tecnologia_fk)
            VALUES (?, ?)
            `, [id_candidato_fk, id_tecnologia_fk]);
            return candidato;
        } catch (error) {
            console.error('Error en create', error);
        }
    }

}

export default Candidato_tecnologia_models;