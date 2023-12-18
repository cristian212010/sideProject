import { Router } from 'express';
import Tecnologia_controller from '../controllers/tecnologia.controller.js';

export const create_tecnologia_router = ({tecnologia_model}) =>{

    const tecnologia_router = Router();

    const tecnologia_controller = new Tecnologia_controller({tecnologia_model});

    tecnologia_router.get('/', tecnologia_controller.getAll);

    return tecnologia_router;
}