import { Router } from 'express';
import Nivel_ingles_controller from '../controllers/nivel_ingles.controllers.js';

export const create_nivel_ingles_router = ({nivel_ingles_model}) =>{

    const nivel_ingles_router = Router();

    const nivel_ingles_controller = new Nivel_ingles_controller({nivel_ingles_model});

    nivel_ingles_router.get('/', nivel_ingles_controller.getAll);

    return nivel_ingles_router;
}