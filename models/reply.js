import mongoose, { Schema, models } from "mongoose";

const replySchema = new Schema(
    {
        user: {
            name: {
                type: String,
                required: true,
            },
            profileImage: {
                type: String,
                requierd: true,
            },
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
    },
    { timestamps: true }
)

const Reply = models.Reply || mongoose.model("Reply", replySchema);
export default Reply;