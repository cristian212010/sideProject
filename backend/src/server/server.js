import express from 'express';
import cors from 'cors';
import mailerRoutes from "../routes/nodemailer.routes.js"
import { create_tipo_documento_router } from '../routes/tipo_documento.routes.js';
import { create_rol_router } from '../routes/rol.routes.js';
import { create_especialidad_router } from '../routes/especialidad.routes.js';
import { create_usuario_router } from '../routes/usuario.routes.js';
import { create_candidato_router } from '../routes/candidato.routes.js';
import { create_login_router } from '../routes/auth.routes.js';
import Tipo_documento_model from '../models/tipo_documento.models.js';
import Rol_model from '../models/rol.models.js';
import Especialidad_model from '../models/especialidad.models.js';
import Usuario_model from '../models/usuario.models.js';
import Candidato_model from '../models/candidato.models.js';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            mailer : '/mailer',
            tipo_documento: '/api/tipo_documento',
            rol: '/api/rol',
            especialidad: '/api/especialidad',
            usuario: '/api/usuario',
            candidato: '/api/candidato',
            login: '/api/login'
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.mailer, mailerRoutes)
        this.app.use(this.paths.tipo_documento, create_tipo_documento_router({tipo_documento_model: Tipo_documento_model})),
        this.app.use(this.paths.rol, create_rol_router({rol_model: Rol_model})),
        this.app.use(this.paths.especialidad, create_especialidad_router({especialidad_model: Especialidad_model})),
        this.app.use(this.paths.usuario, create_usuario_router({usuario_model: Usuario_model})),
        this.app.use(this.paths.candidato, create_candidato_router({candidato_model: Candidato_model})),
        this.app.use(this.paths.login, create_login_router({usuario_model: Usuario_model}))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online ${this.port}`);
        })
    }
}

export default Server;