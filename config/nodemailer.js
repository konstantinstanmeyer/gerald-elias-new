import nodemailer from "nodemailer"

const email = process.env.EMAIL;
const pass = process.env.EMAIL_KEY;
const receiver = process.env.RECEIVER;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass,
    }
})

export const mailOptions = {
    from: email,
    to: receiver
}


