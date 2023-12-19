import {Router} from 'express';

import {Datos, DatosRechazados} from '../nodemailer/datosNodemailer.js';



const router = Router()

router.post('/', Datos)
router.post('/rechazo/', DatosRechazados)

export default router