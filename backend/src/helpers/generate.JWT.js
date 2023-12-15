import jwt from 'jsonwebtoken';

const generateJWT = (uid='') =>{
    return new Promise((resolver, reject)=>{
        const payload = {uid};

        jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY,{
            expiresIn: '4h'
        }, (err, token)=>{
            if (err) {
                console.log(err);
                reject('No se pudo generar el JSON WEB TOKEN');
            } else {
                resolver(token);
            }
        })
    })
}

export default generateJWT;