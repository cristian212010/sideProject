import { Router } from "express";
import Candidato_tecnologia_controller from "../controllers/candidato_tecnologia.controllers.js";

export const create_candidato_tecnologia_router = ({ candidato_tecnologia_model }) =>{

    const candidato_tecnologia_router = Router();

    const candidato_tecnologia_controller = new Candidato_tecnologia_controller({candidato_tecnologia_model});

    candidato_tecnologia_router.post('/', candidato_tecnologia_controller.create);

    return candidato_tecnologia_router;
}