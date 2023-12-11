import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Tipo_documento_model {

    static async getAll(){
        try {
            const tipo_documento = await connection.query('SELECT * FROM tipo_documento');
            return tipo_documento;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

}

export default Tipo_documento_model;