import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="comments">
      {comments.map((comment) => {
        return (
          <article key={comment.id} className="comment">
            <div className="comment__avatar"></div>
            <div className="comment__body">
              <div className="comment__title">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">
                  {new Date(comment.timestamp).toLocaleDateString("es-pa")}
                </p>
              </div>
              <p className="comment__text">{comment.comment}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Comments;
