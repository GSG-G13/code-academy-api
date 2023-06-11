import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const { email, password } = process.env;

const sendEmail = async (to: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    
    auth: {
      user: `${email}`,
      pass: `${password}`,
    },
  });

  const mailOptions = {
    from: 'Welcome to code academy',
    to,
    subject,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;