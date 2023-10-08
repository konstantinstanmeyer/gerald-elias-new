import BlogPost from "@/lib/models/BlogPost.js";
import mongoDBConnection from "@/lib/mongodb";

export async function GET(){
    await mongoDBConnection();

    const response = await BlogPost.find();
    return Response.json({ response: response });
}