import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
    {
        postName: {
            type: String,
            required: true,
            index: true,
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
            email: {
                type: String,
                required: true,
                index: true,
            }
        },
        content: {
            text: {
                type: String,
                required: true,
            },
        },
       
        parentComment: {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
            default: null,
            index: true,
        },
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ],
        // optional depth for debugging
        depth: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true }
);

commentSchema.index({ postName: 1, parentComment: 1 });

commentSchema.statics.getCommentsWithReplies = async function(postName) {
    const topLevelComments = await this.find({ 
        postName, 
        parentComment: null 
    }).sort({ createdAt: -1 });

    // recursively populate replies
    const populateReplies = async (comments, currentDepth = 0) => {
        for (let comment of comments) {
            if (comment.replies && comment.replies.length > 0) {
                await comment.populate({
                    path: 'replies',
                    options: { sort: { createdAt: 1 } }
                });
                
                // populate nested replies
                await populateReplies(comment.replies, currentDepth + 1);
            }
        }
        return comments;
    };

    return await populateReplies(topLevelComments);
};

// semantic refactor for readability
commentSchema.methods.addReply = async function(replyData) {
    const Comment = this.constructor;
    
    const reply = new Comment({
        ...replyData,
        parentComment: this._id,
        depth: this.depth + 1,
    });
    
    await reply.save();
    
    this.replies.push(reply._id);
    await this.save();
    
    return reply;
};

commentSchema.methods.getBreadcrumbs = async function() {
    const path = [this];
    let current = this;
    
    while (current.parentComment) {
        current = await this.constructor.findById(current.parentComment);
        if (current) path.unshift(current);
    }
    
    return path;
};

// virtuals testing
commentSchema.virtual('replyCount').get(function() {
    return this.replies ? this.replies.length : 0;
});

// automatically include virtuals in JSON and Object outputs
commentSchema.set('toJSON', { virtuals: true });
commentSchema.set('toObject', { virtuals: true });

const Comment = models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;