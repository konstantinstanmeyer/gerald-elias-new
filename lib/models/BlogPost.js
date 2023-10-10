import mongoose, { Schema } from "mongoose";

const blogPostSchema = new Schema(
    {
        title: String,
        textArr: [String],
        date: String,
        comment: {
            type: String,
            default: ''
        },
    },
    {
        timestamps: true,
    }
)

const BlogPost = mongoose.models?.BlogPost || mongoose.model('BlogPost', blogPostSchema)

export default BlogPost;