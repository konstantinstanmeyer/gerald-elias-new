import mongoDBConnection from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { NextResponse } from "next/server";

export async function POST(req){
    const { title, textArr, date } = await req.json();
    const datePattern = /(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/g;

    await mongoDBConnection();

    if (!datePattern.test(date) || !title || !textArr) return NextResponse.json({ message: 'error' }, { status: 404 });

    await BlogPost.create({
        title: title,
        textArr: JSON.parse(textArr.replace(/'/g, '"')),
        date: date
    });
    
    return NextResponse.json({message: 'success'}, { status: 200 });
}