import { Router } from "express";
import { check } from "express-validator";
import Candidato_controller from "../controllers/candidato.controller.js";
import { usuarioExiste, especialidadExiste } from "../helpers/db.validators.js";
import validateDocuments from "../middlewares/validate.documents.js";

export const create_candidato_router = ({ candidato_model }) =>{

    const candidato_router = Router();

    const candidato_controller = new Candidato_controller({candidato_model});

    candidato_router.get('/', candidato_controller.getAll);
    candidato_router.get('/one/:id', candidato_controller.getOne);
    candidato_router.get('/activos', candidato_controller.getAssets);
    candidato_router.get('/pendientes', candidato_controller.getPendingAssets);
    candidato_router.post('/', [
        check('id_usuario_fk').custom(usuarioExiste),
        check('id_especialidad_fk').custom(especialidadExiste),
        validateDocuments
    ], candidato_controller.create);
    candidato_router.patch('/estado/:id', candidato_controller.updateEstado);


    return candidato_router;
}
