import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";

export async function POST(req){
    try {
        const data = await req.json();

        // console.log(data);

        // console.log(process.env.EMAIL + process.env.EMAIL_KEY)

        const htmlData = `<h2>CONTACT FORM SUBMISSION</h2><h4>Name:</h4><p>${data.name}</p><h4>Email:</h4><p>${data.email}</p><h4>Phone Number:</h4><p>${data.phoneNumber}</p><h4>Message:</h4><p>${data.message}</p>`

        const response = await transporter.sendMail({
            ...mailOptions,
            subject: "Contact Submission",
            html: htmlData
        })

        if(response) {
            return NextResponse.json({ message: "success" },  { status: 200 });
        } else {
            return NextResponse.json({ message: "failure" },  { status: 404 });
        }
    } catch(e){
        return NextResponse.json(e,  { status: 404 });
    }

}