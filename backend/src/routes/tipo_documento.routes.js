import { Router } from 'express';
import Tipo_documento_controller from '../controllers/tipo_documento.controllers.js';

export const tipo_documento_router = ({tipo_documento_model}) =>{

    const tipo_documento_router = Router();

    const tipo_documento_controller = new Tipo_documento_controller({tipo_documento_model});

    tipo_documento_router.get('/', tipo_documento_controller.getAll);

    return tipo_documento_router;
}