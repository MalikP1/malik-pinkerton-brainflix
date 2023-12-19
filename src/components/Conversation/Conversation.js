import MohanImage from "../../assets/images/Mohan-muruge.jpg";
import "./Conversation.scss";

function Conversation() {
  return (
    <article className="conversation">
      <h4 className="conversation__tracker">3 Comments</h4>
      <div className="conversation-container">
        <div className="conversation__content">
          <img
            className="conversation__avatar"
            src={MohanImage}
            alt="Mohan Muruge"
          ></img>
        </div>
        <form className="conversation__form">
          <div className="conversation__inputs">
            <label className="conversation__label">JOIN THE CONVERSATION</label>
            <textarea
              className="conversation__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="conversation__button">COMMENT</button>
        </form>
      </div>
    </article>
  );
}

export default Conversation;
