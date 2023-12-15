import { response } from 'express';
import generateJWT from '../helpers/generate.JWT.js';

class Auth_controller {
    constructor({ usuario_model }){
        this.usuario_model = usuario_model;
    }

    login = async (req, res = response) => {
        const { documento, password } = req.body;

        try {
            const { error, usuario } = await this.usuario_model.login({ documento, password });

            if (error) {
                return res.status(400).json({ msg: error });
            }

            const token = await generateJWT(usuario.id_usuario);

            res.json({
                usuario,
                token
            });
        } catch (error) {
            console.log(error);
            return res.json({
                msg: "Contacte al servicio técnico"
            });
        }
    }
}

export default Auth_controller;