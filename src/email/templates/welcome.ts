import { SendEmailDto } from "../dtos/send-email.dto"

// HTML y CSS de pre-reunión
export const fillTemplate = (body: SendEmailDto) => {
    const {params} = body
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <style>
                .container-mail{
                    border: thin solid rgba(0, 0, 0, 0.15);
                    font-family: Arial, Helvetica, sans-serif;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 1rem;
                }

                .header-mail{
                    display: flex;
                    padding-bottom: 1rem;
                }

                .header-mail p{
                    font-weight: bold;
                    font-size: 20px;
                    color: rgb(105, 105, 105);
                    margin-left: 1rem;
                }

                .section-mail{
                    border-top: thin solid rgba(0, 0, 0, 0.15);
                    padding: 1rem;
                    border-bottom: thin solid rgba(0, 0, 0, 0.15);
                }

                .proyect-text{
                    font-weight: bold;
                    font-size: 24px;
                }

                .section-mail a{
                    text-decoration: none;
                    display: block;
                    width: 120px;
                    text-align: center;
                    margin: 2rem auto;
                    padding: 1rem;
                    background-color: rgb(26, 152, 255);
                    color: white;
                    font-weight: bold;
                    border-radius: 3px;
                }

                .section-mail a:hover{
                    background-color:  rgb(103, 186, 255);
                }

                .footer-mail{
                    padding-top: 1rem;
                    text-align: center;
                    font-size: 11px;
                    color: gray;
                }

            </style>
        </head>
        <body>
            <div class="container-mail">
                <header class="header-mail">
                    <img src="https://logos-download.com/wp-content/uploads/2019/06/About_Me_Logo_old-700x700.png" alt="Logo" width="60" height="60">
                    <p>Meeting Engine</p>
                </header>

                <section class="section-mail">
                    <p class="proyect-text">Faculty Meeting</p>
                    <p>Has sido invitado a la <strong>Reunion 0</strong>, la cual se encuentra en la fase <strong>Pre-reunión</strong>.</p>
                    <p>Para acceder y visualizar la información de la reunión, ingrese a la plataforma en el siguiente enlace:</p>
                    <a href="http://memfollow.diinf.usach.cl/" target="_blank">Ingresar</a>
                    <p>Para mayor información, por favor contactar al anfitrión o secretario de la reunión.</p>
                </section>

                <footer class="footer-mail">
                    <p>Este correo ha sido generado automáticamente. Por favor no responder este correo.</p>
                </footer>
            </div>
        </body>
        </html>
    `
}