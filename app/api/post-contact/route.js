import { NextResponse } from "next/server";

export async function POST(req){
    const { email } = await req.json();

    console.log(email);

    const response = await fetch(process.env.CONTACT_URI, {
        method: 'POST',
        body: JSON.stringify({
            email: email
        })
    });

    console.log(process.env.CONTACT_URI);

    console.log(response);

    if (response.status === 200){
        return NextResponse.json({message: 'success'}, { status: 200 });
    } else {
        return NextResponse.json({message: 'error'}, { status: 404 });
    }
}