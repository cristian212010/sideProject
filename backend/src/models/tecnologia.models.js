import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Tecnologia_model {

    static async getAll(){
        try {
            const tecnologia = await connection.query('SELECT * FROM tecnologia');
            return tecnologia;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

}

export default Tecnologia_model;