// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to,
    subject,
    text
  });
};

module.exports = sendEmail;