import { validationResult } from "express-validator";

const validateDocuments = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const customErrors = errors.array().map(error => {
            return {
                type: error.type,
                value: error.value,
                msg: `El campo ${error.path} es inválido: ${error.msg}`,
                path: error.param,
                location: error.location,
            };
        });

        return res.status(400).json({ errors: customErrors });
    }
    next();
};

export default validateDocuments;