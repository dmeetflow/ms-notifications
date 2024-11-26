import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

// Codigo copiado de https://nodemailer.com/ 
/////////////////////////////////////////////////////////////////////////////////7
//const nodemailer = require("nodemailer"); //esto queda eliminado
// Se copia este contenido al sendEmail
/*
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});
*/

// async..await is not allowed in global scope, must use a wrapper
//async function main() {
  // send mail with defined transport object
  // Se copia este contenido al sendEmail
  /*
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  */

//}

//main().catch(console.error);
///////////////////////////////////////////////////////////////////


@Injectable()
export class Email {

    // Manejo de datos del host correo por variables de entorno
    private transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Envío de mail con los datos correspondientes
    async sendEmail(from, subjectEmail, sendTo,html){
        try {

            const info = await this.transporter.sendMail({
                from, // Correo emisor
                to: sendTo, // Lista de correos de receptor
                subject: subjectEmail, // Asunto
                html: html, // cuerpo del mensaje en html y css
            });
            
            console.log("Message sent: %s", info.messageId);
            
        } catch (error) {
            throw error
        }

    }

    async testEmail(){
        try {
            const info = await this.transporter.sendMail({
                from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Email de prueba", // Subject line
                html: '<b>Test Email</b>', // html body
            });

            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            throw error
        }
    }

}
