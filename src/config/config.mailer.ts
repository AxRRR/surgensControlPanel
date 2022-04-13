
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_SURGENS, 
        pass: process.env.PASSWORD_SURGENS, 
    },
});

export default transporter;