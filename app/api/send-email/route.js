// app/api/send-email/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Create a transporter object using Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
        });

        // Mail options
        const mailOptions = {
            from: process.env.EMAIL_SERVER_USER, // sender address
            to: process.env.EMAIL_TO, // list of receivers
            subject: `New Lead from Ajmera Marina: ${name}`, // Subject line
            html: `
                <h2>New Enquiry Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }
}