import nodemailer from 'nodemailer';


const enviarCorreo = async (req,res) =>{

try {

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
            background-color: #5E3AE2;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 700px;
        }
        .astros{
            width: 200px;
        }

        .texto{
            width: 400px;
        }
        .logo{
            background-color: #E4E4DB;
            border-radius: 2rem;
            padding: 0 0.5rem;
            width: 100px;
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

    
        <img class="astros" src="cid:astro" alt="Campus">
        <div class="texto">

            <h2 style="color: #E4E4DB; text-align: center;">Peticion de Informacion del Candidato</h2>

            <p style="color: #E4E4DB; text-align: center; font-family: calc();">Este es un ejemplo de correo electrónico utilizando Nodemailer y una plantilla HTML básica.</p>

            <p style="color: #E4E4DB; text-align: center;">Puedes personalizar este contenido según tus necesidades.</p>

            <hr>
            <div class="derechos">
                <img class="logo" src="cid:campus" alt="">
                <p style="color: #E4E4DB; text-align: center; font-size: 12px;">Este mensaje fue enviado automáticamente. Por favor, no respondas a este correo electrónico.</p>
            </div>

        </div>
        <img class="astros" src="cid:astro" alt="Campus">

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
        filename: 'astro.png',
        path: './src/nodemailer/img/astro.png',
        cid: 'astro', // Identificador único
    },
    {
        filename: 'campus.png',
        path: './src/nodemailer/img/campus.png',
        cid: 'campus', // Identificador único
    }
];

// Detalles del correo electrónico
const mailOptions = {
    from: 'Contrataciones',
    to: process.env.NODE_USER,
    subject: 'Testeando',
    html: emailTemplate,
    attachments: imageAttachment
};

// Envía el correo electrónico
transporter.sendMail(mailOptions, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Correo electrónico enviado');
        res.json("maincra")
    }
});


} catch (error) {
    console.log(error);
}
}

export default enviarCorreo
