import {Router} from 'express';

import Datos from '../nodemailer/datosNodemailer.js';


const router = Router()

router.post('/', Datos)

export default router