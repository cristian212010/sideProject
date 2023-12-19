class Nivel_ingles_controller {
    constructor({nivel_ingles_model}){
        this.nivel_ingles_model = nivel_ingles_model;
    }

    getAll = async(req, res) =>{
        try {
            const nivel_ingles = await this.nivel_ingles_model.getAll();
            return res.json(nivel_ingles);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Nivel_ingles_controller;