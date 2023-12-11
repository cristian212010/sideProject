import {Router} from 'express';

import enviarCorreo from '../nodemailer/enviarCorreo.js';


const router = Router()

router.post('/', enviarCorreo)

export default router