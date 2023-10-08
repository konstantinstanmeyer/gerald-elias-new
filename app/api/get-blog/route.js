import BlogPost from "@/lib/models/BlogPost.js";

export async function GET(){
    const response = await BlogPost.find()
    return Response.json({ response: response });
}