import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import mongoDBConnection from "@/mongodb/connection";
import Comment from "@/models/comment";

export async function GET(request) {
    try {
        await mongoDBConnection();

        const { searchParams } = new URL(request.url);
        const postName = searchParams.get("postName");

        if (!postName) {
            return NextResponse.json(
                { error: "Post name is required" },
                { status: 400 }
            );
        }

        const comments = await Comment.getCommentsWithReplies(postName);

        return NextResponse.json(comments, { status: 200 });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json(
            { error: "Failed to fetch comments" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const session = await getServerSession(authConfig);

        if (!session) {
            return NextResponse.json(
                { error: "You must be signed in to comment" },
                { status: 401 }
            );
        }

        await mongoDBConnection();

        const body = await request.json();
        const { postName, text, parentCommentId } = body;

        if (!postName || !text) {
            return NextResponse.json(
                { error: "Post name and text are required" },
                { status: 400 }
            );
        }

        const userData = {
            name: session.user.name,
            profileImage: session.user.image,
            email: session.user.email,
        };

        if (parentCommentId) {
            const parentComment = await Comment.findById(parentCommentId);

            if (!parentComment) {
                return NextResponse.json(
                    { error: "Parent comment not found" },
                    { status: 404 }
                );
            }

            const reply = await parentComment.addReply({
                postName,
                user: userData,
                content: {
                    text,
                },
            });

            await reply.populate('replies');

            return NextResponse.json(reply, { status: 201 });
        }

        const newComment = await Comment.create({
            postName,
            user: userData,
            content: {
                text,
            },
            parentComment: null,
            depth: 0,
        });

        return NextResponse.json(newComment, { status: 201 });
    } catch (error) {
        console.error("Error creating comment:", error);
        return NextResponse.json(
            { error: "Failed to create comment", details: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const session = await getServerSession(authConfig);

        if (!session) {
            return NextResponse.json(
                { error: "You must be signed in to edit comments" },
                { status: 401 }
            );
        }

        await mongoDBConnection();

        const body = await request.json();
        const { commentId, text } = body;

        if (!commentId || !text) {
            return NextResponse.json(
                { error: "Comment ID and text are required" },
                { status: 400 }
            );
        }

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return NextResponse.json(
                { error: "Comment not found" },
                { status: 404 }
            );
        }

        if (comment.user.email !== session.user.email) {
            return NextResponse.json(
                { error: "You can only edit your own comments" },
                { status: 403 }
            );
        }

        comment.content.text = text;
        await comment.save();

        return NextResponse.json(comment, { status: 200 });
    } catch (error) {
        console.error("Error updating comment:", error);
        return NextResponse.json(
            { error: "Failed to update comment" },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const session = await getServerSession(authConfig);

        if (!session) {
            return NextResponse.json(
                { error: "You must be signed in to delete comments" },
                { status: 401 }
            );
        }

        await mongoDBConnection();

        const { searchParams } = new URL(request.url);
        const commentId = searchParams.get("commentId");

        if (!commentId) {
            return NextResponse.json(
                { error: "Comment ID is required" },
                { status: 400 }
            );
        }

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return NextResponse.json(
                { error: "Comment not found" },
                { status: 404 }
            );
        }

        if (comment.user.email !== session.user.email) {
            return NextResponse.json(
                { error: "You can only delete your own comments" },
                { status: 403 }
            );
        }

        await deleteCommentAndReplies(commentId);

        if (comment.parentComment) {
            await Comment.findByIdAndUpdate(
                comment.parentComment,
                { $pull: { replies: commentId } }
            );
        }

        return NextResponse.json(
            { message: "Comment deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting comment:", error);
        return NextResponse.json(
            { error: "Failed to delete comment" },
            { status: 500 }
        );
    }
}

async function deleteCommentAndReplies(commentId) {
    const comment = await Comment.findById(commentId);
    
    if (!comment) return;

    if (comment.replies && comment.replies.length > 0) {
        for (const replyId of comment.replies) {
            await deleteCommentAndReplies(replyId);
        }
    }

    await Comment.findByIdAndDelete(commentId);
}