async function getComments(postName) {
    const comments = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ postName }),
    });
    return await comments.json();
}

export default async function Comments({ postName }) {
    const comments = await getComments(postName);

    return (
        <section>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <h4>{comment.user.name}</h4>
                    <p>{comment.content.text}</p>
                </div>
            ))}
        </section>
    )
}
