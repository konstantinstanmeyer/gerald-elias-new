import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
    {
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        user: {
            name: {
                type: String,
                required: true,
            },
            profileImage: {
                type: String,
                required: true,
            },
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
    },
    { timestamps: true }
)

const Comment = models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;