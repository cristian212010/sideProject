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
    
    getAssets = async(req, res) =>{
        try {
            const usuario = await this.usuario_model.getAssets();
            return res.json(usuario);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async(req, res) =>{
        try {
            const result = validateUsuario(req.body);

            if (!result.success) {
                return res.status(404).json({error: JSON.parse(result.error.message)});
            }

            const newUsuario = await this.usuario_model.create({input: result.data})

            return res.json(newUsuario)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    delete = async(req, res) =>{
        try {
            const id = req.params.id;
            await this.usuario_model.delete({id: id});
            return res.json({message: 'Usuario deleted'})
        } catch (error) {
            res.status(404).json({message: 'Usuario not found'})
        }
    }

    update = async(req, res) =>{
        try {
            const id = req.params.id;
            const result = validatePartialUsuario(req.body);
            if (!result.success) {
                return res.status(404).json({ error: JSON.parse(result.error.message) })
            }
            const updateUsuario = await this.usuario_model.update({id, input: result.data});
            return res.json(updateUsuario);
        } catch (error) {
            res.status(400).json({message: error});
        }
    }

}

export default Usuario_controller;