import { validateUsuario, validatePartialUsuario } from "../schemas/usuario.schema.js";

class Usuario_controller {
    constructor({usuario_model}){
        this.usuario_model = usuario_model;
    }

    getAll = async(req, res) =>{
        try {
            const usuario = await this.usuario_model.getAll();
            return res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async(req, res) =>{
        try {
            const result = validateUsuario(req.body);

            if (!result.success) {
                return res.status(404).json({error: json.parse(result.error.message)});
            }

            const newUsuario = await this.usuario_model.create({input: result.data})

            return res.json(newUsuario)
        } catch (error) {
            res.status(201).json({message: error})
            console.error(error);
        }
    }
}

export default Usuario_controller;