import dbConnection from "../database/connection.js";

const connection = await dbConnection();

const rolValido = async( id_rol='' )=>{
    const existeRol = await connection.query(`SELECT * FROM rol WHERE id_rol = ?`, [id_rol]);
    if (existeRol.length === 0) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const documentoExiste = async( id_tipo_documento = '' ) => {
    const existeDocumento = await connection.query(`
    SELECT * FROM tipo_documento WHERE id_tipo_documento = ?`, [id_tipo_documento]);
    if(existeDocumento.length === 0){
        throw new Error(`El tipo de documento ${ id_tipo_documento }, no esta registrado en la base de datos`);
    }
}

export { rolValido, documentoExiste };