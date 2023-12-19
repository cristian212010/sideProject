import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Especialidad_model {

    static async getAll(){
        try {
            const especialidad = await connection.query('SELECT * FROM especialidad');
            return especialidad;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

}

export default Especialidad_model;