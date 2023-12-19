import dotenv from 'dotenv';
import Server from './src/server/server.js';

dotenv.config();

const server = new Server();

server.listen();
