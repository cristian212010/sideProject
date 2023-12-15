class Especialidad_controller {
    constructor({especialidad_model}){
        this.especialidad_model = especialidad_model;
    }

    getAll = async(req, res) =>{
        try {
            const especialidad = await this.especialidad_model.getAll();
            return res.json(especialidad);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Especialidad_controller;