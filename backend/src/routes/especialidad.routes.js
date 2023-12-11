import { Router } from 'express';
import Especialidad_controller from '../controllers/especialidad.controllers.js';

export const create_especialidad_router = ({especialidad_model}) =>{

    const especialidad_router = Router();

    const especialidad_controller = new Especialidad_controller({especialidad_model});

    especialidad_router.get('/', especialidad_controller.getAll);

    return especialidad_router;
}