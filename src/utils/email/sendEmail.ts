import nodemailer from 'nodemailer';
import { EMAIL, EMAIL_PASSWORD } from '../../config';

const sendEmail = async (to: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,

    auth: {
      user: `${EMAIL}`,
      pass: `${EMAIL_PASSWORD}`,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'Code Academy <codeacademy.gsg@gmail.com>',
    to,
    subject,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
