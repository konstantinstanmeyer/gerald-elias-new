import BlogPost from "@/models/BlogPost";

export async function GET(){
    const response = await BlogPost.find()
    return Response.json({ response: response });
}