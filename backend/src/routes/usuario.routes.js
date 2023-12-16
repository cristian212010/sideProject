import { Router } from 'express';
import { check } from 'express-validator'
import { rolValido, tipoDocumentoExiste, documentoExiste, emailExiste } from '../helpers/db.validators.js';
import validateDocuments from '../middlewares/validate.documents.js';
import Usuario_controller from '../controllers/usuario.controllers.js';
import isAdminRole from '../middlewares/validate.rol.js';
import validateJWT from '../middlewares/validate.JWT.js';

export const create_usuario_router = ({usuario_model}) =>{

    const usuario_router = Router();

    const usuario_controller = new Usuario_controller({usuario_model});

    usuario_router.get('/', [
        validateJWT,
        isAdminRole
    ], usuario_controller.getAll);
    usuario_router.get('/activos', usuario_controller.getAssets);
    usuario_router.get('/getOne/:documento', usuario_controller.getUserByDocumento);
    usuario_router.post('/', [
        validateJWT,
        isAdminRole,
        check('id_rol_fk').custom(rolValido),
        check('id_tipo_documento_fk').custom(tipoDocumentoExiste),
        check('documento').custom(documentoExiste),
        check('email').custom(emailExiste),
        validateDocuments
    ], usuario_controller.create);
    usuario_router.delete('/:id', [
        validateJWT,
        isAdminRole
    ], usuario_controller.delete);
    usuario_router.patch('/:id', usuario_controller.update);

    return usuario_router;
}