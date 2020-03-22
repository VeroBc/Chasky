const expresso = require('express')
const sgMail = require('@sendgrid/mail');

const aplicacion = expresso()
const puerto = 7778

aplicacion.get('/enviarEmail', (req, res) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'verobc.cel@gmail.com',
        from: 'verobc.cel@gmail.com',
        subject: 'Enviando correos con SendGrid is Fun',
        text: 'Esta es una prueba para enviar correos',
        html: '<strong>Esta es una prueba para enviar correos</strong>',
    };

    sgMail
        .send(msg)
        .then(() => {console.log('correo enviado')}, console.error);
 /*
    (async () => {
    try {
        await sgMail.send(msg);
    } catch (err) {
        console.error(err.toString());
    }
    })();
*/

    res.send('Aquí vamos a mandar un email')
});

aplicacion.get('/', (req, res) => res.send('Frase de prueba batch 3'))

aplicacion.get('/enviarPrueba', (req, res) => res.send('Aquí vamos Perú'))

aplicacion.get('/enviarFoto',  (req, res) => {
    res.sendFile( __dirname + '/imagenes/unafoto.jpg');
});

aplicacion.get('/enviarHTML',  (req, res) => {
    res.sendFile( __dirname + '/HTML/jsbin.lotus.html');
});

aplicacion.listen(puerto, () => console.log(`Estamos empezando a escucharte querido, o sea habla my friend ${puerto}!`))

