import { response, request } from "express";
import jwt from 'jsonwebtoken';
import dbConnection from "../database/connection.js";

const connection = dbConnection();

const validateJWT = async( req = request, res = response, next ) =>{
    const token = req.header('x-api-token-jwt');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const {uid} = jwt.verify( token, process.env.SECRET_OR_PRIVATE_KEY );
        const usuario = (await connection).query(`
        SELECT u.*, r.rol AS rol
        FROM usuario u
        JOIN rol r ON u.id_rol_fk = r.id_rol
        WHERE u.id_usuario = ?
        `, [uid]);
        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        } 
        req.usuario = usuario; 
        console.log("req usuario en validate",req.usuario);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

export default validateJWT;