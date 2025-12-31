import mongoose, { Schema, models } from "mongoose";
import Post from "./post"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        provider: {
            type: String,
            required: true,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;