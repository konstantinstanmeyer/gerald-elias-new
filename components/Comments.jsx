"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "@/components/SignIn";

// Fake comments with nested replies for demonstration
const FAKE_COMMENTS = [
    {
        _id: "1",
        user: {
            name: "Sarah Mitchell",
            profileImage: "/avatars/sarah.jpg"
        },
        content: {
            text: "This is a wonderful piece. The way you've explored the themes of memory and time really resonates with my own experiences. I've been thinking about these ideas for years, and your perspective adds a fresh dimension to the conversation."
        },
        date: "2 days ago",
        replies: [
            {
                _id: "1-1",
                user: {
                    name: "Michael Torres",
                    profileImage: "/avatars/michael.jpg"
                },
                content: {
                    text: "I completely agree with your take on this. The memory aspect is particularly fascinating."
                },
                date: "1 day ago",
                replies: [
                    {
                        _id: "1-1-1",
                        user: {
                            name: "Sarah Mitchell",
                            profileImage: "/avatars/sarah.jpg"
                        },
                        content: {
                            text: "Thanks Michael! I'd love to hear more about what specific parts resonated with you."
                        },
                        date: "1 day ago",
                        replies: [
                            {
                                _id: "1-1-1-1",
                                user: {
                                    name: "Emily Rodriguez",
                                    profileImage: "/avatars/emily.jpg"
                                },
                                content: {
                                    text: "This thread is getting deep! I'm learning so much from all of you."
                                },
                                date: "12 hours ago",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                _id: "1-2",
                user: {
                    name: "Alex Kim",
                    profileImage: "/avatars/alex.jpg"
                },
                content: {
                    text: "Have you read the work by Dr. Peterson on this topic? It might add to your perspective."
                },
                date: "1 day ago",
                replies: []
            }
        ]
    },
    {
        _id: "2",
        user: {
            name: "James Chen",
            profileImage: "/avatars/james.jpg"
        },
        content: {
            text: "I appreciate the depth of research that went into this article. The historical context you provided really helps frame the current situation. Looking forward to reading more of your work."
        },
        date: "5 days ago",
        replies: []
    }
];

function Comment({ comment, depth = 0, onReply }) {
    const { data: session } = useSession();
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState("");

    const handleReplyClick = () => {
        setReplyingTo(comment._id);
        setReplyText("");
    };

    const handleCancelReply = () => {
        setReplyingTo(null);
        setReplyText("");
    };

    const handleSubmitReply = async () => {
        // TODO: Implement reply submission logic
        console.log("Submitting reply to comment:", comment._id);
        console.log("Reply text:", replyText);
        
        // Reset after submission
        setReplyText("");
        setReplyingTo(null);
    };

    return (
        <div className={`comment depth-${Math.min(depth, 5)}`}>
            <div className="comment-content">
                <div className="comment-header">
                    <Image 
                        height={48} 
                        width={48} 
                        src={comment.user.profileImage} 
                        alt={comment.user.name}
                        className="comment-avatar"
                    />
                    <div className="comment-meta">
                        <h4 className="comment-author">{comment.user.name}</h4>
                        <span className="comment-date">{comment.date}</span>
                    </div>
                </div>
                
                <p className="comment-text">{comment.content.text}</p>
                
                <button 
                    className="reply-button"
                    onClick={handleReplyClick}
                >
                    Reply
                </button>

                {replyingTo === comment._id && (
                    <div className="reply-container">
                        {session ? (
                            <>
                                <div className="reply-header">
                                    <p className="reply-message">
                                        Replying to {comment.user.name}
                                    </p>
                                    <button 
                                        className="cancel-reply-button"
                                        onClick={handleCancelReply}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <textarea
                                    className="reply-textarea"
                                    placeholder="Write your reply..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    rows={4}
                                />
                                <button
                                    className="submit-reply-button"
                                    onClick={handleSubmitReply}
                                    disabled={!replyText.trim()}
                                >
                                    Submit Reply
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="reply-signin-header">
                                    <p className="reply-signin-message">
                                        Sign in to reply to {comment.user.name}
                                    </p>
                                    <button 
                                        className="cancel-reply-button"
                                        onClick={handleCancelReply}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <SignIn />
                            </>
                        )}
                    </div>
                )}
            </div>

            {comment.replies && comment.replies.length > 0 && (
                <div className="replies">
                    {comment.replies.map((reply) => (
                        <Comment 
                            key={reply._id} 
                            comment={reply} 
                            depth={depth + 1}
                            onReply={onReply}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function CommentsSection({ postName }) {
    const { data: session } = useSession();
    const [newCommentText, setNewCommentText] = useState("");

    const handleSubmitComment = async () => {
        // TODO: Implement new comment submission logic
        console.log("Submitting new comment");
        console.log("Comment text:", newCommentText);
        
        // Reset after submission
        setNewCommentText("");
    };

    return (
        <section className="comments-section">
            <h2 className="comments-title">Discussion</h2>
            <p className="comments-subtitle">
                Join the conversation {!session && "by signing in below"}
            </p>
            
            <div className="comments-list">
                {FAKE_COMMENTS.map((comment) => (
                    <Comment 
                        key={comment._id} 
                        comment={comment} 
                        depth={0}
                    />
                ))}
            </div>

            <div className="new-comment-section">
                <h3 className="new-comment-title">Leave a comment</h3>
                {session ? (
                    <>
                        <textarea
                            className="new-comment-textarea"
                            placeholder="Share your thoughts..."
                            value={newCommentText}
                            onChange={(e) => setNewCommentText(e.target.value)}
                            rows={5}
                        />
                        <button
                            className="submit-comment-button"
                            onClick={handleSubmitComment}
                            disabled={!newCommentText.trim()}
                        >
                            Post Comment
                        </button>
                    </>
                ) : (
                    <>
                        <p className="signin-prompt">Sign in to join the discussion</p>
                        <SignIn />
                    </>
                )}
            </div>
        </section>
    );
}