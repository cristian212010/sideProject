import { Router } from 'express';
import { check } from 'express-validator'
import { rolValido, documentoExiste } from '../helpers/db.validators.js';
import validateDocuments from '../middlewares/validate.documents.js';
import Usuario_controller from '../controllers/usuario.controllers.js';

export const create_usuario_router = ({usuario_model}) =>{

    const usuario_router = Router();

    const usuario_controller = new Usuario_controller({usuario_model});

    usuario_router.get('/', usuario_controller.getAll);
    usuario_router.get('/activos', usuario_controller.getAssets);
    usuario_router.post('/', [
        check('id_rol_fk').custom(rolValido),
        check('id_tipo_documento_fk').custom(documentoExiste),
        validateDocuments
    ], usuario_controller.create);
    usuario_router.delete('/:id', usuario_controller.delete);
    usuario_router.patch('/:id', usuario_controller.update);

    return usuario_router;
}