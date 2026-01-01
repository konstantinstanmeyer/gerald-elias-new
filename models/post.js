import mongoose, { Schema, models } from "mongoose";
import Reply from "./reply"

const userSchema = new Schema(
    {
        user: {
            name: {
                type: String,
                required: true,
            },
            profileImage: {
                type: String,
                required: true,
            },
            content: {
                text: {
                    type: String,
                    required: true,
                },
                comments: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: 'Comment',
                    }
                ]
            }
        }
    },
    { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", userSchema);
export default Post;