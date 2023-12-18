class Tecnologia_controller {
    constructor({tecnologia_model}){
        this.tecnologia_model = tecnologia_model;
    }

    getAll = async(req, res) =>{
        try {
            const rol = await this.tecnologia_model.getAll();
            return res.json(rol);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Tecnologia_controller;