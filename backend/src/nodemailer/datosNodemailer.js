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

export default Datos