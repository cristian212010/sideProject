class Rol_controller {
    constructor({rol_model}){
        this.rol_model = rol_model;
    }

    getAll = async(req, res) =>{
        try {
            const rol = await this.rol_model.getAll();
            return res.json(rol);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Rol_controller;