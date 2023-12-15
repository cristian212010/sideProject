import dbConnection from "../database/connection.js";

const connection = await dbConnection();

const rolValido = async( id_rol='' )=>{
    const existeRol = await connection.query(`SELECT * FROM rol WHERE id_rol = ?`, [id_rol]);
    if (existeRol.length === 0) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const tipoDocumentoExiste = async( id_tipo_documento = '' ) => {
    const existeTipoDocumento = await connection.query(`
    SELECT * FROM tipo_documento WHERE id_tipo_documento = ?`, [id_tipo_documento]);
    if(existeTipoDocumento.length === 0){
        throw new Error(`El tipo de documento ${ id_tipo_documento }, no esta registrado en la base de datos`);
    }
}

const documentoExiste = async( documento = '' ) => {
    const existeDocumento = await connection.query(`
    SELECT * FROM usuario WHERE documento = ?`, [documento]);
    if(existeDocumento.length !== 0){
        throw new Error(`El documento ${ documento }, ya esta registrado en la base de datos`);
    }
}

const emailExiste = async( email = '' ) => {
    const existeEmail = await connection.query(`
    SELECT * FROM usuario WHERE email = ?`, [email]);
    if(existeEmail.length !== 0){
        throw new Error(`El email ${ email }, ya esta registrado en la base de datos`);
    }
}

const usuarioExiste = async( id_usuario = '' ) =>{
    const existeUsuario = await connection.query(`
    SELECT * FROM usuario WHERE id_usuario = ?`,[id_usuario]);
    if (existeUsuario.length === 0){ 
        throw new Error(`El usuario ${ id_usuario }, no esta registrado en la base de datos`);
    }
}

const especialidadExiste = async( id_especialidad = '') =>{
    const existeEspecialidad = await connection.query(`
    SELECT * FROM especialidad WHERE id_especialidad = ?`, [id_especialidad]);
    if (existeEspecialidad.length === 0) {
        throw new Error(`La especialidad ${ id_especialidad }, no esta registrada en la base de datos`);
    }
}

export { rolValido, tipoDocumentoExiste, usuarioExiste, especialidadExiste, documentoExiste, emailExiste };