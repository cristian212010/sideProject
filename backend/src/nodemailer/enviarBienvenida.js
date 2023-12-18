import nodemailer from 'nodemailer';

const enviarCorreonuevoUsuario = async (data) =>{
    try {
    
    console.log(data);
    
    //contenido del archivo HTML
    const emailTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Correo Electrónico</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        <style>
        /* Aplica la fuente a tu CSS */
        body {
            font-family: 'Poppins', sans-serif;
        }
    
        .padre{
            background: linear-gradient(121.06deg, rgba(51, 56, 111, 0.5) 0%, rgba(45, 44, 61, 0.5) 100%, rgba(84, 82, 121, 0.5) 100%), url(cid:fondo);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: grid;
            height: 100vh;
            max-height:346px;
            justify-items: center;
            width: 800px;
        }
        .astros{
            width: 180px;
        }
    
        .texto{
            width: 400px;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 1rem;
            border-radius: 2rem;
    
        }
        .logo{
            background-color: #E4E4DB;
            border-radius: 2rem;
            padding: 0 0.5rem;
            width: 50px;
            height: 50px;
            margin-top: 10px;
        }
        
        .derechos{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    
    </style>
    </head>
    <body>
    
        <div class="padre" style=" margin: 0 auto; padding: 20px; border: 1px solid #ccc;">
    
        
           
            <div class="texto">
    
                <h2 style="color: #E4E4DB; text-align: center;">Bienvenido</h2>
    
                <p style="color: #E4E4DB; text-align: center;">Hola ${data.nombres} ${data.apellidos}</p>
                <p style="color: #E4E4DB; text-align: center;">Te damos la bienvenida a nuestro sitio web</p>
                <p style="color: #E4E4DB; text-align: center;">Te han creado una cuenta para que puedas terminar de completr tus datos para las empresas</p>
    
    
                <p style="color: #E4E4DB; text-align: center;">Tus datos para ingresar son:</p>
                <p style="color: #E4E4DB; text-align: center;">Documento: ${data.documento}</p>
                <p style="color: #E4E4DB; text-align: center;">Contrseña: ${data.password}</p>
    
                <hr>
                <div class="derechos">
                    <img class="logo" src="cid:campus" alt="">
                    <p style="color: #E4E4DB; text-align: center; font-size: 12px;">Este mensaje fue enviado automáticamente. Por favor, no respondas a este correo electrónico.</p>
                </div>
    
            </div>
           
    
        </div>
    
    </body>
    </html>
    
    
    `
    
    // Configura el transporte de correo electrónico
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODE_USER,
            pass: process.env.NODE_PASS,
        },
    });
    
    const imageAttachment = [
        {
            filename: 'campus.png',
            path: './src/nodemailer/img/campus.png',
            cid: 'campus', // Identificador único
        },
        {
            filename: 'img89.jpg',
            path: './src/nodemailer/img/img89.jpg',
            cid: 'fondo', // Identificador único
        }
    ];
    
    // Detalles del correo electrónico
    const mailOptions = {
        from: 'Contrataciones',
        to: `${data.email}`,
        subject: 'Datos Ingreso',
        html: emailTemplate,
        attachments: imageAttachment
    };
    
    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Correo electrónico enviado');
            
        }
    });
    
    
    } catch (error) {
        console.log(error);
    }
    }


export default enviarCorreonuevoUsuario