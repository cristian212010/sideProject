import express from 'express';
import cors from 'cors';
import { tipo_documento_router } from '../routes/tipo_documento.routes.js';
import Tipo_documento_model from '../models/tipo_documento.models.js';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            tipo_documento: '/api/tipo_documento'
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.tipo_documento, tipo_documento_router({tipo_documento_model: Tipo_documento_model}))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online`);
        })
    }
}

export default Server;