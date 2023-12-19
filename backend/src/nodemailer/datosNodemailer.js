import enviarCorreoUsuarioRechazado from "./correoRechazoMailer.js";
import enviarCorreo from "./enviarCorreo.js";

const Datos = async (req, res) =>{
    try {
        const data = req.body

        if (data === undefined) {
           return console.log("No se encuentran datos");
        }
        await enviarCorreo(data);
    } catch (error) {
        console.log(error);
    }
}

const DatosRechazados = async (req, res) =>{
    try {
        const data = req.body
        
        console.log(data);

        if (data === undefined) {
            return console.log("No se encuentran datos");
         }

         await enviarCorreoUsuarioRechazado(data)
    } catch (error) {
        console.log(error);
    }
}

export {Datos,DatosRechazados}