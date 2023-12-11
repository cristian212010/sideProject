class Tipo_documento_controller {
    constructor({tipo_documento_model}){
        this.tipo_documento_model = tipo_documento_model;
    }

    getAll = async(req, res) =>{
        try {
            const tipo_documento = await this.tipo_documento_model.getAll();
            return res.json(tipo_documento);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default Tipo_documento_controller;