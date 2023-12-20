import "./Main.scss";
import Title from "../Title/Title";
import PostDetails from "../PostDetails/PostDetails";
import Bio from "../Bio/Bio";
import Conversation from "../Conversation/Conversation";
import Comments from "../Comments/Comments";

function Main({ selectedVideo }) {
  return (
    <section className="main">
      <article className="main__header">
        <Title text={selectedVideo.title} />
        <PostDetails details={selectedVideo} />
      </article>
      <Bio bio={selectedVideo.description} />
      <Conversation convo={selectedVideo} />
      <Comments comments={selectedVideo.comments} />
    </section>
  );
}

export default Main;
