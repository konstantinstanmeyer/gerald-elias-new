

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