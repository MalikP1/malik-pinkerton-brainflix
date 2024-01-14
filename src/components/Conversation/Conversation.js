import MohanImage from "../../assets/images/Mohan-muruge.jpg";
import "./Conversation.scss";

function Conversation({ convo }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <article className="conversation">
      <h4 className="conversation__tracker">
        {convo.comments.length} Comments
      </h4>
      <div className="conversation-container">
        <div className="conversation__content">
          <img
            className="conversation__avatar"
            src={MohanImage}
            alt="Mohan Muruge"
          ></img>
        </div>
        <form onSubmit={handleFormSubmit} className="conversation__form">
          <div className="conversation__inputs">
            <label className="conversation__label">Join the conversation</label>
            <textarea
              className="conversation__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="conversation__button">Comment</button>
        </form>
      </div>
    </article>
  );
}

export default Conversation;
