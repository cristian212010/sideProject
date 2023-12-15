import { Router } from "express";
import Auth_controller from "../controllers/auth.controllers.js";

export const create_login_router = ({usuario_model}) =>{

    const login_router = Router();

    const auth_controller = new Auth_controller({usuario_model});

    login_router.post('/', auth_controller.login);

    return login_router;
}