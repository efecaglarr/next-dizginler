"use server"
import nodemailer from "nodemailer"
import * as handlebars from "handlebars"
import { SendMailProps, MailTemplateProps } from '@/types'
import { welcomeTemplate } from "./templates/welcome";

export async function sendMail({ to, name, subject, body }: SendMailProps) {
    const {SMTP_MAIL, SMTP_PASSWORD } = process.env;
    // Create a transport object for sending emails with Nodemailer using Gmail.
    // `SMTP_MAIL` and `SMTP_PASSWORD` hold the sender's email and password.
    const transport = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : SMTP_MAIL, // sender's email
            pass : SMTP_PASSWORD // sender's password
        }
    });
    console.log("SMTP_MAIL:", process.env.SMTP_MAIL);
    console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD);
    try {
        const result = await transport.verify()
        console.log(result);
        
    } catch (error) {
        console.log(error);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from : SMTP_MAIL, to, subject, html: await body
        })
        console.log(sendResult);
    } catch (error){
        console.log(error);
        
    }
    console.log(`Email sent to ${to} with subject "${subject}" and body:`);
    console.log(body);
}

export async function compileWelcomeTemplate(e : MailTemplateProps){
    const template = handlebars.compile(welcomeTemplate)
    const htmlBody = template({
        name: e.name,
        lastName: e.lastName,
        price: e.price,
        pickupLocation: e.pickupLocation,
        pickupTime: e.pickupTime
    })
    return htmlBody;
}