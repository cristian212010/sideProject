import dbConnection from "../database/connection.js";

const connection = await dbConnection();

class Rol_model {

    static async getAll(){
        try {
            const rol = await connection.query('SELECT * FROM rol');
            return rol;
        } catch (error) {
            console.error('Error en getAll:', error)
        }
    }

}

export default Rol_model;