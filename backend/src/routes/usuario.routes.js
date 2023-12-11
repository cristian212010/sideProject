import { Router } from 'express';
import Usuario_controller from '../controllers/usuario.controllers.js';

export const create_usuario_router = ({usuario_model}) =>{

    const usuario_router = Router();

    const usuario_controller = new Usuario_controller({usuario_model});

    usuario_router.get('/', usuario_controller.getAll);
    usuario_router.post('/', usuario_controller.create);

    return usuario_router;
}