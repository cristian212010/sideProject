class Candidato_tecnologia_controller{

    constructor({ candidato_tecnologia_model }){
        this.candidato_tecnologia_model = candidato_tecnologia_model;
    }

    create = async(req, res)=>{
        try {
            const result = req.body;
            console.log(result);
            const newCandidato = await this.candidato_tecnologia_model.create({input: result.tecnologiasForm});
            return res.status(201).json(newCandidato)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

export default Candidato_tecnologia_controller;