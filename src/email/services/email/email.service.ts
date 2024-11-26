import { Injectable } from '@nestjs/common';
import { SendEmailDto } from 'src/email/dtos/send-email.dto';
import { Email } from 'src/email/providers/email/email';

@Injectable()
export class EmailService {

    constructor(
        private emailProvider: Email
    ){}

    // Servicio para enviar email
    async sendEmail(body: SendEmailDto){
        try {
            const {from, subjectEmail, sendTo} = body
            const html = this.getTemplate(body)
            await this.emailProvider.sendEmail(from, subjectEmail, sendTo,html)

        } catch (error) {
            throw error
        }
            
    }

    // Servicio para testear email
    async healthCheck(){
        try {
            await this.emailProvider.testEmail()
            return true           
        } catch (error) {
            throw error
        }
    }

    // Servicio para obtener la plantilla html y css del mensaje del correo
    private getTemplate(body){
        const template = this.getTemplateFile(body.template)
        const html = template.fillTemplate(body)
        return html
    }

    // Servicio para obtener el archivo en donde se encuentra la plantilla html y css del correo
    private getTemplateFile(template){
        const path = '../../templates'
        const templateFile = require(`${path}/${template}`)
        return templateFile
    }


}
