import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Nivel_ingles_models {

    static async getAll(){
        try {
            const nivel_ingles = await connection.query('SELECT * FROM nivel_ingles');
            return nivel_ingles;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

}

export default Nivel_ingles_models;