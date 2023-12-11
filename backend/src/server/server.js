import express from 'express';
import cors from 'cors';
import mailerRoutes from "../routes/nodemailer.routes.js"

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            mailer : '/mailer',
        }
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.mailer, mailerRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online ${this.port}`);
        })
    }
}

export default Server;