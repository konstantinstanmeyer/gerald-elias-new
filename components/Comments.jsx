"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignIn from "@/components/SignIn";

function Comment({ comment, postName, depth = 0, onCommentUpdate }) {
    const { data: session } = useSession();
    const [replyingTo, setReplyingTo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [editText, setEditText] = useState(comment.content.text);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isOwner = session?.user?.email === comment.user.email;

    const handleReplyClick = () => {
        setReplyingTo(true);
        setReplyText("");
    };

    const handleCancelReply = () => {
        setReplyingTo(false);
        setReplyText("");
    };

    const handleEditClick = () => {
        setEditing(true);
        setEditText(comment.content.text);
    };

    const handleCancelEdit = () => {
        setEditing(false);
        setEditText(comment.content.text);
    };

    const handleSubmitReply = async () => {
        if (!replyText.trim() || isSubmitting) return;
        
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postName,
                    text: replyText,
                    parentCommentId: comment._id,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit reply');
            }

            setReplyText("");
            setReplyingTo(false);
            onCommentUpdate(); // refresh
        } catch (error) {
            console.error("Error submitting reply:", error);
            alert("Failed to submit reply. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmitEdit = async () => {
        if (!editText.trim() || isSubmitting) return;
        
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/comment', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    commentId: comment._id,
                    text: editText,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update comment');
            }

            setEditing(false);
            onCommentUpdate(); // refresh
        } catch (error) {
            console.error("Error updating comment:", error);
            alert("Failed to update comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this comment? This will also delete all replies.")) {
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`/api/comment?commentId=${comment._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }

            onCommentUpdate(); // refresh
        } catch (error) {
            console.error("Error deleting comment:", error);
            alert("Failed to delete comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInMs = now - date;
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInSeconds < 60) return "just now";
        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
        if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

        return date.toLocaleDateString();
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
                        <span className="comment-date">{formatDate(comment.createdAt)}</span>
                    </div>
                </div>
                
                {editing ? (
                    <div className="edit-container">
                        <textarea
                            className="reply-textarea"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            rows={4}
                        />
                        <div className="edit-actions">
                            <button
                                className="submit-reply-button"
                                onClick={handleSubmitEdit}
                                disabled={!editText.trim() || isSubmitting}
                            >
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                            <button
                                className="cancel-reply-button"
                                onClick={handleCancelEdit}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="comment-text">{comment.content.text}</p>
                )}
                
                <div className="comment-actions">
                    <button 
                        className="reply-button"
                        onClick={handleReplyClick}
                        disabled={isSubmitting}
                    >
                        Reply
                    </button>
                    
                    {isOwner && !editing && (
                        <>
                            <button
                                className="reply-button"
                                onClick={handleEditClick}
                                disabled={isSubmitting}
                            >
                                Edit
                            </button>
                            <button
                                className="reply-button delete-button"
                                onClick={handleDelete}
                                disabled={isSubmitting}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>

                {replyingTo && (
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
                                        disabled={isSubmitting}
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
                                    disabled={!replyText.trim() || isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Reply'}
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
                            postName={postName}
                            depth={depth + 1}
                            onCommentUpdate={onCommentUpdate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function CommentsSection({ postName }) {
    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            setError(null);
            const response = await fetch(`/api/comment?postName=${postName}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }

            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError("Failed to load comments. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postName]);

    const handleSubmitComment = async () => {
        if (!newCommentText.trim() || isSubmitting) return;
        
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postName,
                    text: newCommentText,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            setNewCommentText("");
            await fetchComments(); // refresh
        } catch (error) {
            console.error("Error submitting comment:", error);
            alert("Failed to submit comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="comments-section">
            <h2 className="comments-title">Discussion</h2>
            
            {isLoading ? (
                <p className="loading-message">Loading comments...</p>
            ) : error ? (
                <div className="error-container">
                    <p className="error-message">{error}</p>
                    <button 
                        className="retry-button"
                        onClick={fetchComments}
                    >
                        Try Again
                    </button>
                </div>
            ) : (
                <>
                    {comments.length > 0  && (
                        <>
                            <p className="comments-subtitle">
                                {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                            </p>
                            <div className="comments-list">
                                {comments.map((comment) => (
                                    <Comment 
                                        key={comment._id} 
                                        comment={comment} 
                                        postName={postName}
                                        depth={0}
                                        onCommentUpdate={fetchComments}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}

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
                            disabled={isSubmitting}
                        />
                        <button
                            className="submit-comment-button"
                            onClick={handleSubmitComment}
                            disabled={!newCommentText.trim() || isSubmitting}
                        >
                            {isSubmitting ? 'Posting...' : 'Post Comment'}
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