import { NextResponse } from "next/server";
import mongoDBConnection from "@/mongodb/connection";
import Replies from "@/models/reply";

export async function GET(request) {
    const { postName } = await request.json();

    await mongoDBConnection();

    const replies = await Replies.find({ postId: postName });

    return NextResponse.json(replies);
}

export async function POST(request) {
    const { postName, author, content } = await request.json();

    await mongoDBConnection();
}