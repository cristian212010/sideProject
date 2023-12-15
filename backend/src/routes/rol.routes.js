import { Router } from 'express';
import Rol_controller from '../controllers/rol.controllers.js';

export const create_rol_router = ({rol_model}) =>{

    const rol_router = Router();

    const rol_controller = new Rol_controller({rol_model});

    rol_router.get('/', rol_controller.getAll);

    return rol_router;
}