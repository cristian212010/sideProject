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

    getOne = async(req, res)=>{
        try {
            const id = req.params.id;
            const candidato = await this.candidato_model.getOne({ id });
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

    getPendingAssets = async(req, res) =>{
        try {
            const candidato = await this.candidato_model.getPendingAssets();
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

    
    updateEstado = async(req, res) =>{
        try {
            const id = req.params.id;
            const updateCandidato = await this.candidato_model.updateEstado({id: id});
            return res.json(updateCandidato);
        } catch (error) {
            res.status(400).json({message: error});
        }
    }

    getByFilters = async (req, res) => {
        try {
            const { id_especialidad, id_nivel_ingles, id_tecnologia, disponibilidad_viajar } = req.body;
            const candidatos = await this.candidato_model.getByFilters({
                id_especialidad,
                id_nivel_ingles,
                id_tecnologia,
                disponibilidad_viajar
            });
            return res.json(candidatos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

export default Candidato_controller;