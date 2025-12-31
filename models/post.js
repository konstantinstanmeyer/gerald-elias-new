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
                replies: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: 'Reply',
                    }
                ]
            }
        }
    },
    { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", userSchema);
export default Post;