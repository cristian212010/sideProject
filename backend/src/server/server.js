import express from 'express';
import cors from 'cors';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server online`);
        })
    }
}

export default Server;