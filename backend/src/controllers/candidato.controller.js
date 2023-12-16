import { validateCandidato, validatePartialCandidato } from "../schemas/candidato.schema.js";

class Candidato_controller{

    constructor({ candidato_model }){
        this.candidato_model = candidato_model;
    }

    getAll = async(req, res)=>{
        try {
            const candidato = await this.candidato_model.getAll();
            return res.json(candidato);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    getAssets = async(req, res) =>{
        try {
            const candidato = await this.candidato_model.getAssets();
            return res.json(candidato);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    create = async(req, res)=>{
        try {
            const result = validateCandidato(req.body);
            if (!result.success) {
                return res.status(404).json({error: JSON.parse(result.error.message)});
            }
            const newCandidato = await this.candidato_model.create({input: result.data});
            return res.status(201).json(newCandidato)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    delete = async(req, res) =>{
        try {
            const id = req.params.id;
            await this.candidato_model.delete({id: id});
            return res.json({message: 'Candidato deleted'})
        } catch (error) {
            res.status(404).json({message: 'Candidato not found'})
        }
    }

    update = async(req, res) =>{
        try {
            const id = req.params.id;
            const result = validatePartialCandidato(req.body);
            if (!result.success) {
                return res.status(404).json({ error: JSON.parse(result.error.message) })
            }
            const updateCandidato = await this.candidato_model.update({id: id,input: result.data});
            return res.json(updateCandidato);
        } catch (error) {
            res.status(400).json({message: error});
        }
    }

}

export default Candidato_controller;